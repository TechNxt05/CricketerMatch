const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");
const UserResponse = require("./models/UserResponse");
const calculateMatch = require("./analysis");
const cricketers = require("./data/cricketers");
const nodemailer = require("nodemailer");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Get questions
const questions = require("./data/questions");

app.get("/questions", (req, res) => {
  res.json(questions);
});

// Submit response
app.post("/analyze", async (req, res) => {
  const { name, email, answers } = req.body;

  if (!answers || !Array.isArray(answers)) {
    return res.status(400).json({ error: "Invalid answers format" });
  }

  const userTraits = answers.flatMap(a => a.selectedTraits);
  const result = calculateMatch(userTraits);

  try {
    try {
      const newRes = new UserResponse({ name, email, answers, result });
      await newRes.save();
    } catch (dbError) {
      console.error("Database Error:", dbError);
      // We might want to fail if DB fails, or just log it. 
      // Fails for now to alert us.
      // return res.status(500).json({ error: "Database error" });
    }

    const sortedMatches = Object.entries(result)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, score]) => ({
        name,
        score,
        ...cricketers[name]
      }));

    const topMatch = sortedMatches[0];

    // Try sending email but don't fail request if it fails
    try {
      await sendEmail(email, name, result, topMatch.name);
    } catch (emailError) {
      console.error("Email Error:", emailError);
      // Continue execution
    }

    // Return top 5 matches
    res.json({
      match: topMatch,
      top5: sortedMatches
    });

  } catch (e) {
    console.error("General Error:", e);
    res.status(500).json({ error: "Server error" });
  }
});

// Admin route
app.get("/responses", async (req, res) => {
  const { name, from, to } = req.query;
  const filter = {};
  if (name) filter.name = new RegExp(name, "i");
  if (from || to) {
    filter.createdAt = {};
    if (from) filter.createdAt.$gte = new Date(from);
    if (to) filter.createdAt.$lte = new Date(to);
  }
  const results = await UserResponse.find(filter).sort({ createdAt: -1 });
  res.json(results);
});

// Email function
async function sendEmail(email, name, result, topCricketer) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log("Skipping email: No credentials");
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const resultText = Object.entries(result)
    .map(([k, v]) => `${k}: ${v}%`)
    .join("\n");

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Your Cricketer Match Result: ${topCricketer}`,
    text: `Hello ${name},\n\nHere are your match results:\n\n${resultText}\n\nTop Match: ${topCricketer}`
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
