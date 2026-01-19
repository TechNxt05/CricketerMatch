module.exports = [
  // --- Section 1: Match Scenarios (Specific & Tactical) ---
  {
    id: "q1",
    text: "World Cup Final. 15 runs needed off 6 balls. You are batting. Who is the bowler you'd hate to face?",
    type: "scenario",
    options: [
      { text: "Jasprit Bumrah (Deadly Yorkers)", traits: ["technical", "disciplined"] },
      { text: "Rashid Khan (Mystery Spin)", traits: ["smart", "strategic"] },
      { text: "Jofra Archer (Raw Pace)", traits: ["fearless", "intense"] },
      { text: "Mitchell Starc (Swing)", traits: ["classic", "bold"] }
    ]
  },
  {
    id: "q2",
    text: "You are the Captain. Opposition needs 10 runs to win. Who do you trust to bowl the last over?",
    type: "scenario",
    options: [
      { text: "The Cool Spinner (Defensive)", traits: ["calm", "strategic", "intelligent", "leader"] },
      { text: "The Fast Bowler (Attack)", traits: ["aggressive", "passionate", "bold", "expressive"] },
      { text: "The Mystery Bowler (Risk)", traits: ["cheeky", "unorthodox", "confident", "creative"] },
      { text: "The Experienced Pacer (Reliable)", traits: ["disciplined", "focused", "humble", "resilient"] }
    ]
  },
  {
    id: "q3",
    text: "Your team is 3 wickets down for 20 runs. The ball is swinging. What's your plan?",
    type: "scenario",
    options: [
      { text: "Counter-attack! Hit them out of the attack.", traits: ["aggressive", "fearless", "flashy", "bold"] },
      { text: "Defend solidly. Wear them down.", traits: ["focused", "resilient", "classic", "disciplined"] },
      { text: "Rotate strike. Keep scoreboard moving.", traits: ["smart", "composed", "strategic", "busy"] },
      { text: "Play my natural game, no pressure.", traits: ["fun-loving", "relaxed", "confident", "cool"] }
    ]
  },

  // --- Section 2: Lifestyle & Personality (Diverse) ---
  {
    id: "q4",
    text: "Pick a Movie Star who matches your vibe:",
    type: "lifestyle",
    options: [
      { text: "Shah Rukh Khan (Charismatic Leader)", traits: ["charismatic", "leader", "passionate", "popular"] },
      { text: "Aamir Khan (The Perfectionist)", traits: ["disciplined", "focused", "technical", "masterful"] },
      { text: "Ranveer Singh (Energy & Flash)", traits: ["energetic", "fun-loving", "flashy", "quirky"] },
      { text: "Irrfan Khan (Subtle & Classy)", traits: ["humble", "classy", "quiet", "intelligent"] }
    ]
  },
  {
    id: "q5",
    text: "What's your go-to Music Playlist?",
    type: "lifestyle",
    options: [
      { text: "Punjabi / Hip Hop (High Energy)", traits: ["fun-loving", "energetic", "bold", "flashy"] },
      { text: "Classical / Sufi (Soulful)", traits: ["calm", "composed", "classic", "graceful"] },
      { text: "Rock / Metal (Intense)", traits: ["intense", "aggressive", "passionate", "fiery"] },
      { text: "Indie / Acoustic (Chill)", traits: ["relaxed", "cool", "modern", "friendly"] }
    ]
  },
  {
    id: "q6",
    text: "Pick a Dream Vacation Spot:",
    type: "lifestyle",
    options: [
      { text: "Mumbai / NYC (Fast Life)", traits: ["ambitious", "modern", "busy", "smart", "intense"] },
      { text: "Goa / Ibiza (Party Central)", traits: ["fun-loving", "social", "relaxed", "cool", "party"] },
      { text: "Himalayas / Switzerland (Peace)", traits: ["calm", "quiet", "introvert", "focused", "graceful"] },
      { text: "Amazon / Safari (Adventure)", traits: ["fearless", "bold", "energetic", "resilient", "wild"] }
    ]
  },
  {
    id: "q7",
    text: "Choose a Spirit Animal:",
    type: "lifestyle",
    options: [
      { text: "Lion (Dominant Leader)", traits: ["leader", "aggressive", "royal", "confident"] },
      { text: "Wolf (Smart & Strategic)", traits: ["strategic", "smart", "resilient", "team-player"] },
      { text: "Elephant (Calm & Strong)", traits: ["calm", "powerful", "reliable", "composed"] },
      { text: "Eagle (Sharp & Focused)", traits: ["focused", "technical", "disciplined", "ambitious"] }
    ]
  },

  // --- Section 3: Personal Interests ---
  {
    id: "q8",
    text: "Favorite Weekend Hobby:",
    type: "hobby",
    options: [
      { text: "Gym / Sports (Action)", traits: ["fit", "disciplined", "passionate", "energetic"] },
      { text: "Gaming / Streaming (Digital)", traits: ["modern", "fun-loving", "cheeky", "innovative"] },
      { text: "Reading / Learning (Intellectual)", traits: ["intelligent", "quiet", "strategic", "curious"] },
      { text: "Hanging out with friends (Social)", traits: ["charismatic", "friendly", "relaxed", "popular"] }
    ]
  },
  {
    id: "q9",
    text: "Pick a Favorite Singer/Artist:",
    type: "culture",
    options: [
      { text: "Arijit Singh (Deep & Emotional)", traits: ["emotional", "humble", "passionate", "sincere"] },
      { text: "Divine / Rap (Bold & Real)", traits: ["bold", "fighter", "intense", "raw"] },
      { text: "Diljit Dosanjh (Swag & Fun)", traits: ["fun-loving", "flashy", "charismatic", "stylish"] },
      { text: "AR Rahman (Genius & Calm)", traits: ["masterful", "calm", "genius", "legend"] }
    ]
  },

  // --- Section 4: Cricket Specific ---
  {
    id: "q10",
    text: "Which shot gives you the most satisfaction?",
    type: "cricket",
    options: [
      { text: "The Helicopter Shot (Power)", traits: ["unorthodox", "powerful", "fearless", "innovative"] },
      { text: "The Perfect Cover Drive (Class)", traits: ["classic", "elegant", "technical", "graceful"] },
      { text: "The Reverse Sweep (Risk)", traits: ["creative", "cheeky", "bold", "smart"] },
      { text: "The Pull Shot (Dominance)", traits: ["aggressive", "confident", "superior", "intense"] }
    ]
  },
  // --- Section 5: The "Deep" Differentiators ---
  {
    id: "q11",
    text: "Your approach to Fitness:",
    type: "lifestyle",
    options: [
      { text: "Hardcore Gym Freak (Strength)", traits: ["fit", "intense", "powerful", "disciplined"] },
      { text: "Natural Agility / Running (Speed)", traits: ["athletic", "quick", "energetic", "busy"] },
      { text: "Mental Toughness over Physical (Mind)", traits: ["smart", "strategic", "calm", "resilient"] },
      { text: "Play hard, Party hard (Balance)", traits: ["fun-loving", "relaxed", "charismatic", "flashy"] }
    ]
  },
  {
    id: "q12",
    text: "Preferred Car/Bike Collection:",
    type: "lifestyle",
    options: [
      { text: "Vintage Bikes (Classic)", traits: ["classic", "humble", "passionate", "cool"] },
      { text: "Fast Sports Cars (Speed)", traits: ["flashy", "aggressive", "ambitious", "modern"] },
      { text: "Luxury SUVs (Comfort)", traits: ["relaxed", "leader", "royal", "wealthy"] },
      { text: "Practical & Reliable (Simple)", traits: ["disciplined", "focused", "quiet", "reliable"] }
    ]
  },
  {
    id: "q13",
    text: "It's a Super Over. Pressure is max. What's your mindset?",
    type: "scenario",
    options: [
      { text: "I was born for this. (Excitement)", traits: ["chatterbox", "cheeky", "fearless", "confident"] },
      { text: "Calculate the angles. (Focus)", traits: ["strategic", "smart", "technical", "composed"] },
      { text: "Full intense aggression. (Fire)", traits: ["aggressive", "intense", "passionate", "emotional"] },
      { text: "Just watch the ball. (Zen)", traits: ["calm", "humble", "focused", "masterful"] }
    ]
  },
  {
    id: "q14",
    text: "Favorite Food Cheat Meal:",
    type: "lifestyle",
    options: [
      { text: "Butter Chicken / Desi (Hearty)", traits: ["fun-loving", "bold", "flamboyant", "happy"] },
      { text: "Sushi / Healthy Stuff (Strict)", traits: ["fit", "disciplined", "modern", "serious"] },
      { text: "Biryani (Royal)", traits: ["classic", "royal", "relaxed", "leader"] },
      { text: "Burger / Pizza (Chill)", traits: ["cool", "energetic", "young", "wild"] }
    ]
  },
  {
    id: "q15",
    text: "How do you handle a loss?",
    type: "scenario",
    options: [
      { text: "Blame myself, stay quiet. (Introspective)", traits: ["quiet", "focused", "emotional", "serious"] },
      { text: "Smile and move on. It's just a game. (Balanced)", traits: ["calm", "humble", "philosophical", "nice"] },
      { text: "Get angry, train harder. (Fire)", traits: ["aggressive", "passionate", "intense", "ambitious"] },
      { text: "Analyze what went wrong. (Data)", traits: ["smart", "strategic", "composed", "intelligent"] }
    ]
  }
];
