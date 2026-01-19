const questions = [
  {
    id: 1,
    question: "How do you handle pressure in a critical moment?",
    options: [
      { text: "Stay calm and composed", traits: ["calm", "strategic", "composed"] },
      { text: "Take charge with intensity", traits: ["aggressive", "bold", "passionate"] },
      { text: "Look for fun in the moment", traits: ["fun-loving", "charismatic"] },
      { text: "Trust my preparation", traits: ["disciplined", "analytical"] }
    ]
  },
  {
    id: 2,
    question: "Your ideal role in a team would be:",
    options: [
      { text: "Leader", traits: ["leader", "strategic", "confident"] },
      { text: "Finisher", traits: ["resilient", "bold", "composed"] },
      { text: "Supporter", traits: ["team-player", "humble", "intelligent"] },
      { text: "Star performer", traits: ["talented", "confident", "masterful"] }
    ]
  },
  {
    id: 3,
    question: "How would your friends describe you?",
    options: [
      { text: "Cool-headed", traits: ["calm", "quiet", "gentleman"] },
      { text: "Energetic", traits: ["energetic", "fearless", "fit"] },
      { text: "Mature", traits: ["focused", "humble", "resilient"] },
      { text: "Bold", traits: ["flashy", "confident", "passionate"] }
    ]
  },
  {
    id: 4,
    question: "What motivates you the most?",
    options: [
      { text: "Team victory", traits: ["leader", "team-player", "resilient"] },
      { text: "Personal milestones", traits: ["masterful", "focused", "bold"] },
      { text: "Fun and fame", traits: ["entertainer", "fun-loving", "flashy"] },
      { text: "Breaking limits", traits: ["intense", "gritty", "work ethic"] }
    ]
  },
  {
    id: 5,
    question: "Pick a favorite playing condition:",
    options: [
      { text: "Challenging overseas pitches", traits: ["gritty", "strategic", "resilient"] },
      { text: "Home advantage", traits: ["confident", "composed", "humble"] },
      { text: "Big-match moments", traits: ["leader", "fearless", "bold"] },
      { text: "Unexpected scenarios", traits: ["analytical", "technical", "creative"] }
    ]
  },
  {
    id: 6,
    question: "What’s your decision-making style?",
    options: [
      { text: "Strategic", traits: ["strategic", "leader", "tactical"] },
      { text: "Impulsive", traits: ["fearless", "aggressive", "bold"] },
      { text: "Balanced", traits: ["composed", "intelligent", "natural leader"] },
      { text: "Data-driven", traits: ["analytical", "technical", "focused"] }
    ]
  },
  {
    id: 7,
    question: "If you weren’t a cricketer, you'd be a:",
    options: [
      { text: "Army officer", traits: ["disciplined", "resilient", "strategic"] },
      { text: "Fitness trainer", traits: ["fit", "energetic", "bold"] },
      { text: "Comedian", traits: ["fun-loving", "entertainer", "charismatic"] },
      { text: "Tech geek", traits: ["analytical", "intelligent", "focused"] }
    ]
  },
  {
    id: 8,
    question: "What kind of energy do you bring to a group?",
    options: [
      { text: "Stable and composed", traits: ["calm", "composed", "easy-going"] },
      { text: "High-octane", traits: ["aggressive", "bold", "energetic"] },
      { text: "Playful and fun", traits: ["charismatic", "fun-loving", "entertainer"] },
      { text: "Focused and intense", traits: ["intense", "gritty", "focused"] }
    ]
  },
  {
    id: 9,
    question: "Your biggest strength as a person?",
    options: [
      { text: "Patience", traits: ["calm", "resilient", "strategic"] },
      { text: "Passion", traits: ["passionate", "bold", "fearless"] },
      { text: "Creativity", traits: ["entertainer", "unorthodox", "fun-loving"] },
      { text: "Work ethic", traits: ["focused", "analytical", "gritty"] }
    ]
  },
  {
    id: 10,
    question: "How do you celebrate success?",
    options: [
      { text: "Stay grounded", traits: ["humble", "focused", "gentleman"] },
      { text: "Aggressive celebration", traits: ["confident", "bold", "passionate"] },
      { text: "Dance and party", traits: ["entertainer", "charismatic", "fun-loving"] },
      { text: "Quiet satisfaction", traits: ["quiet", "composed", "disciplined"] }
    ]
  },
  {
    id: 11,
    question: "What would you do after a failure?",
    options: [
      { text: "Learn and move on", traits: ["resilient", "leader", "humble"] },
      { text: "Train harder", traits: ["gritty", "fit", "focused"] },
      { text: "Blame no one", traits: ["calm", "gentleman", "composed"] },
      { text: "Stay unaffected", traits: ["confident", "bold", "quiet"] }
    ]
  },
  {
    id: 12,
    question: "Your ideal captain?",
    options: [
      { text: "Calm and wise", traits: ["leader", "strategic", "composed"] },
      { text: "Fiery and bold", traits: ["aggressive", "fearless", "passionate"] },
      { text: "Fun and uniting", traits: ["charismatic", "fun-loving", "team-player"] },
      { text: "Tactical and smart", traits: ["intelligent", "analytical", "focused"] }
    ]
  },
  {
    id: 13,
    question: "Your playing style is more:",
    options: [
      { text: "Classical", traits: ["masterful", "resilient", "disciplined"] },
      { text: "Aggressive", traits: ["fearless", "bold", "confident"] },
      { text: "Unorthodox", traits: ["creative", "fun-loving", "entertainer"] },
      { text: "Analytical", traits: ["analytical", "focused", "technical"] }
    ]
  },
  {
    id: 14,
    question: "How do you prefer to spend your off-day?",
    options: [
      { text: "Reading or meditating", traits: ["calm", "humble", "focused"] },
      { text: "Working out", traits: ["fit", "disciplined", "energetic"] },
      { text: "Partying", traits: ["entertainer", "fun-loving", "flashy"] },
      { text: "Watching game videos", traits: ["analytical", "technical", "obsessive"] }
    ]
  },
  {
    id: 15,
    question: "Choose a superpower you’d want:",
    options: [
      { text: "Time control", traits: ["strategic", "leader", "calm"] },
      { text: "Unlimited stamina", traits: ["fit", "fearless", "gritty"] },
      { text: "Teleportation", traits: ["fun-loving", "creative", "charismatic"] },
      { text: "Mind reading", traits: ["analytical", "intelligent", "focused"] }
    ]
  },
  {
    id: 16,
    question: "Your relationship with fans is:",
    options: [
      { text: "Respectful", traits: ["humble", "grounded", "focused"] },
      { text: "Engaging", traits: ["bold", "confident", "charismatic"] },
      { text: "Playful", traits: ["fun-loving", "entertainer", "flashy"] },
      { text: "Inspiring", traits: ["resilient", "leader", "strategic"] }
    ]
  },
  {
    id: 17,
    question: "What best defines your personality?",
    options: [
      { text: "Introvert", traits: ["quiet", "calm", "analytical"] },
      { text: "Ambivert", traits: ["composed", "leader", "focused"] },
      { text: "Extrovert", traits: ["fun-loving", "charismatic", "energetic"] },
      { text: "Observer", traits: ["intelligent", "strategic", "disciplined"] }
    ]
  },
  {
    id: 18,
    question: "Pick your cricket format:",
    options: [
      { text: "Test", traits: ["resilient", "focused", "masterful"] },
      { text: "ODI", traits: ["composed", "balanced", "leader"] },
      { text: "T20", traits: ["fun-loving", "bold", "flashy"] },
      { text: "All of them", traits: ["versatile", "fit", "gritty"] }
    ]
  },
  {
    id: 19,
    question: "What's your style under pressure?",
    options: [
      { text: "Cool finisher", traits: ["composed", "resilient", "calm"] },
      { text: "Fired up", traits: ["bold", "aggressive", "fearless"] },
      { text: "Smile and attack", traits: ["fun-loving", "charismatic", "confident"] },
      { text: "Break it down logically", traits: ["analytical", "focused", "intelligent"] }
    ]
  },
  {
    id: 20,
    question: "Your biggest priority in cricket?",
    options: [
      { text: "Team culture", traits: ["leader", "humble", "strategic"] },
      { text: "Fitness and aggression", traits: ["fit", "passionate", "bold"] },
      { text: "Entertainment", traits: ["fun-loving", "entertainer", "flashy"] },
      { text: "Skill mastery", traits: ["analytical", "focused", "technical"] }
    ]
  },
  {
    id: 21,
    question: "Your leadership style is:",
    options: [
      { text: "Inclusive and calm", traits: ["leader", "humble", "composed"] },
      { text: "High-energy and aggressive", traits: ["aggressive", "confident", "passionate"] },
      { text: "Fun and motivational", traits: ["fun-loving", "charismatic", "energetic"] },
      { text: "Quiet and strategic", traits: ["strategic", "intelligent", "analytical"] }
    ]
  },
  {
    id: 22,
    question: "Your tolerance for risk?",
    options: [
      { text: "Very low", traits: ["calm", "composed", "humble"] },
      { text: "Moderate", traits: ["focused", "leader", "intelligent"] },
      { text: "High", traits: ["bold", "fearless", "aggressive"] },
      { text: "Thrill-seeking", traits: ["fun-loving", "flashy", "confident"] }
    ]
  },
  {
    id: 23,
    question: "What’s most fun for you in a team?",
    options: [
      { text: "Strategizing together", traits: ["strategic", "leader", "composed"] },
      { text: "Training hard", traits: ["fit", "disciplined", "focused"] },
      { text: "Celebrating wins", traits: ["fun-loving", "charismatic", "energetic"] },
      { text: "Analyzing performance", traits: ["analytical", "technical", "intelligent"] }
    ]
  },
  {
    id: 24,
    question: "Your biggest weakness?",
    options: [
      { text: "Overthinking", traits: ["analytical", "intelligent", "calm"] },
      { text: "Impulsiveness", traits: ["bold", "aggressive", "confident"] },
      { text: "Avoiding spotlight", traits: ["quiet", "humble", "composed"] },
      { text: "Being too fun", traits: ["fun-loving", "flashy", "charismatic"] }
    ]
  },
  {
    id: 25,
    question: "If you write a cricket autobiography, it’s about:",
    options: [
      { text: "Team-building", traits: ["leader", "composed", "strategic"] },
      { text: "Personal grind", traits: ["focused", "resilient", "disciplined"] },
      { text: "Fun times & moments", traits: ["fun-loving", "charismatic", "energetic"] },
      { text: "Data and tactics", traits: ["analytical", "intelligent", "technical"] }
    ]
  }
];

export default questions;
