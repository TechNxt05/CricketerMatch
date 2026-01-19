import React, { useState } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';
import Quiz from './components/Quiz';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [isCalculated, setIsCalculated] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New loading state

  const handleStart = () => {
    if (name) setIsStarted(true);
  };

  const handleSubmit = async (answers) => {
    setIsLoading(true); // Start loading
    try {
      // Fake delay for "Calculating..." effect
      setTimeout(async () => {
        const res = await axios.post('https://cricketermatch.onrender.com/analyze', { name, answers });
        setResultData(res.data);
        setIsLoading(false);
        setIsCalculated(true);
      }, 2000);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  const handleShare = async () => {
    const element = document.querySelector('.result-card');
    if (element) {
      const canvas = await html2canvas(element, {
        backgroundColor: '#0a0a0a', // Dark background to prevent fading
        scale: 2, // High resolution
        useCORS: true // Handle cross-origin images if any
      });
      const data = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = data;
      link.download = `CricketerMatch_${resultData.match.name.replace(' ', '_')}.png`;
      link.click();
    }
  };

  // --- 1. Result View ---
  if (isCalculated && resultData) {
    const { match } = resultData;
    return (
      <div className="app-container">
        <div className="result-card">
          <div className="match-label">YOUR CRICKETER MATCH IS</div>
          <div className="match-percentage">{match.score}%</div>
          <h1 className="cricketer-name">{match.name}</h1>
          <div className="cricketer-role">{match.role}</div>

          <p className="cricketer-bio">"{match.bio}"</p>

          {match.quote && (
            <div style={{
              margin: '20px 0',
              fontStyle: 'italic',
              color: 'var(--neon-blue)',
              fontSize: '1.3rem',
              borderLeft: '4px solid var(--neon-blue)',
              paddingLeft: '15px'
            }}>
              "{match.quote}"
            </div>
          )}

          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-label">Style</span>
              <span className="stat-value">{match.style.split(',')[0]}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Power</span>
              <span className="stat-value">{match.traits.includes('aggressive') ? 'High' : 'Balanced'}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Temperament</span>
              <span className="stat-value">{match.traits.includes('calm') ? 'Cool' : 'Fiery'}</span>
            </div>
          </div>

          <h2 style={{ marginTop: '50px', color: '#fff', fontSize: '1.5rem' }}>Other Top Matches</h2>
          <div className="top-matches-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '15px',
            marginTop: '20px'
          }}>
            {resultData.top5.slice(1).map((m, idx) => (
              <div key={idx} style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '15px',
                borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{ color: 'var(--neon-green)', fontWeight: 'bold' }}>{m.score}%</div>
                <div style={{ color: '#fff', margin: '5px 0', fontSize: '1.1rem' }}>{m.name}</div>
                <div style={{ fontSize: '0.8rem', color: '#888' }}>{m.role}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '40px' }}>
            <button
              className="start-btn"
              style={{ background: 'var(--neon-blue)', color: '#000' }}
              onClick={handleShare}
            >
              Share / Download Card
            </button>
            <button
              className="start-btn"
              onClick={() => window.location.reload()}
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- 2. Loading View ---
  if (isLoading) {
    return (
      <div className="app-container">
        <h1 className="neon-text flicker">CALCULATING MATCH...</h1>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  // --- 3. Start Screen ---
  return (
    <div className="app-container">
      {!isStarted ? (
        <div className="start-screen">
          <h1 className="title-neon">CRICKETER <span className="title-white">MATCH</span></h1>
          <p className="subtitle">Discover which cricket legend matches your personality.</p>

          <div className="input-group">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {/* Email Removed */}
          </div>

          <button className="start-btn" onClick={handleStart}>START MATCH</button>
        </div>
      ) : (
        <Quiz onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default App;
