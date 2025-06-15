import React, { useState } from 'react';

function TrendCard({ title, category, description, explanation, image, engagement }) {
  const [showExplanation, setShowExplanation] = useState(false);

  const formatEngagement = (number) => {
    if (!number) return '0'; // Handle null/undefined
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'K';
    }
    return number.toString();
  };

  return (
    <div className="trend-card">
      <div className="trend-image">
        <img src={image} alt={title} />
        <div className="trend-engagement">
          <span>🔥 {formatEngagement(engagement)} shares</span>
        </div>
      </div>
      <div className="trend-content">
        <span className="trend-category">{category}</span>
        <h3 className="trend-title">{title}</h3>
        <p className="trend-description">{description}</p>
        
        <button 
          className="btn-explanation" 
          onClick={() => setShowExplanation(!showExplanation)}
        >
          {showExplanation ? 'Hide Explanation' : 'Learn More'}
        </button>
        
        {showExplanation && (
          <div className="trend-explanation">
            <p>{explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TrendCard;
