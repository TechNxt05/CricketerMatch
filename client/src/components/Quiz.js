import React, { useState, useEffect } from "react";
import axios from "axios";

const Quiz = ({ onSubmit }) => {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch questions from backend
    axios.get("http://localhost:5000/questions")
      .then(res => {
        setQuestions(res.data);
        setLoading(false);
      })
      .catch(err => console.error("Error fetching questions:", err));
  }, []);

  const selectOption = (traits) => {
    const newAnswer = {
      questionId: questions[current].id,
      selectedTraits: traits
    };

    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      onSubmit(updatedAnswers);
    }
  };

  if (loading) return <h2 style={{ color: '#fff' }}>Loading Matches...</h2>;

  const q = questions[current];

  return (
    <div className="quiz-container">
      <div className="question-card">
        <h2 className="question-text">{q.text}</h2>
        <div className="options-grid">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              className="option-card"
              onClick={() => selectOption(opt.traits)}
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>
      <p style={{ color: '#666', marginTop: '20px' }}>
        Question {current + 1} of {questions.length}
      </p>
    </div>
  );
};

export default Quiz;
