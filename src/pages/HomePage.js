import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JoinForm from '../components/JoinForm';
const heroBg = require('../images/hero-bg.jpg');

function HomePage() {
  const [showJoinForm, setShowJoinForm] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="hero-wrapper" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero">
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <h1 className="hero-title">Stay in the loop, always.</h1>
            <p className="hero-subtitle">Stay ahead of trends. Join the movement.</p>
            <button className="btn-primary" onClick={() => navigate('/trending')}>
              Explore Trends
            </button>
          </div>
        </div>
      </div>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why NoFomo?</h2>
          <div className="feature-text">
            Discover trending memes, audios, slang, and content ideas based on your niche.
            No more falling behind!
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <h3>🎭 Social Trends</h3>
              <p>Stay updated with the latest explosive memes and community trends</p>
            </div>
            <div className="feature-card">
              <h3>🎵 Viral Audio</h3>
              <p>Never miss another trending music or sound phenomenon</p>
            </div>
            <div className="feature-card">
              <h3>💬 Slang Guide</h3>
              <p>Keep up with Gen Z vocabulary and expressions</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>About NoFomo</h3>
              <p>Your daily dose of what's trending in the meme universe. Never feel left out again.</p>
            </div>
            <div className="footer-section">
              <h3>Connect With Us</h3>
              <div className="social-links">
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Discord</a>
                <a href="#" className="social-link">Instagram</a>
              </div>
            </div>
            <div className="footer-section">
              <h3>Join the Movement</h3>
              <p>Be part of the community that's always in the know.</p>
              <button 
                className="btn-secondary"
                onClick={() => setShowJoinForm(true)}
              >
                Join Now!
              </button>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 NoFomo. Stay Trending.</p>
          </div>
        </div>
      </footer>

      {showJoinForm && (
        <JoinForm onClose={() => setShowJoinForm(false)} />
      )}
    </div>
  );
}

export default HomePage;