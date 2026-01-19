# 🏏 CricketerMatch (Neon Edition)

**Find out which cricket legend matches your personality!**

CricketerMatch is a full-stack interactive quiz application that analyzes your personality traits, lifestyle choices, and cricket preferences to match you with a famous cricketer. It features a modern "Neon" aesthetic, real-time analysis, and a rich database of 20+ cricket stars.

![Banner](https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)

## ✨ Features

*   **Interactive Quiz**: 15 engaging scenarios ranging from "Super Over Mindset" to "Favorite Cheat Meal".
*   **Smart Analysis**: Weighted matching logic that compares your choices against real cricketer traits.
*   **Rich Results**:
    *   **Top Match Card**: Detailed profile with Role, Style, Bio, and Famous Quote.
    *   **Top 5 Matches**: See your runner-up matches and their percentages.
*   **Premium UI**:
    *   **Glassmorphism**: Modern, translucent card design.
    *   **Neon Theme**: Energetic dark mode with neon green & blue accents.
    *   **Mobile Responsive**: Looks great on all devices.
*   **Email Integration**: Sends the detailed result to the user's email (optional).

## 🛠️ Tech Stack

*   **Frontend**: React.js, CSS3 (Glassmorphism, Grid/Flexbox)
*   **Backend**: Node.js, Express.js
*   **Database**: MongoDB (Atlas)
*   **Other**: Nodemailer (Email), Axios (API)

## 🚀 Getting Started

### Prerequisites
*   Node.js installed
*   MongoDB Atlas Connection String

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/cricketer-match.git
    cd cricketer-match
    ```

2.  **Setup the Backend**
    ```bash
    cd server
    npm install
    ```
    *   Create a `.env` file in the `server` folder:
        ```env
        PORT=5000
        MONGO_URI=your_mongodb_connection_string
        EMAIL_USER=your_gmail@gmail.com
        EMAIL_PASS=your_gmail_app_password
        ```
    *   Start the server:
        ```bash
        node app.js
        ```

3.  **Setup the Frontend**
    ```bash
    cd ../client
    npm install
    npm start
    ```
    *   The app should now be running on `http://localhost:3000`!

## 📦 Deployment

This project is optimized for deployment on **Vercel** (Frontend) and **Render** (Backend).

👉 **[Read the Deployment Guide](./deployment_guide.md)** for step-by-step instructions.

## 🤝 Contributing

Feel free to fork this repo and submit Pull Requests to add more cricketers or questions!

---
*Built with ❤️ by Amritanshu*
