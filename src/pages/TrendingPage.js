import React, { useState, useEffect } from 'react';
import TrendCard from '../components/TrendCard';
import { getTrends } from '../services/airtable';
import '../styles/components/trendingbackgrounds.css';

function TrendingPage() {
  const [trends, setTrends] = useState([]);
  const [categories, setCategories] = useState(['all']);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        setLoading(true);
        const trendData = await getTrends();
        
        // Filter out trends with undefined categories and get unique categories
        const uniqueCategories = ['all', ...new Set(
          trendData
            .filter(trend => trend.category) // Remove items with undefined category
            .map(trend => trend.category.toLowerCase())
        )];
        
        setCategories(uniqueCategories);
        setTrends(trendData);
      } catch (error) {
        console.error('Fetch error:', error);
        setError('Failed to load trends');
      } finally {
        setLoading(false);
      }
    };

    fetchTrends();
  }, []);

  return (
    <div className="page-wrapper">
      <div className="trending-page">
        <div className="container">
          <div className="trending-header">
            <h1>What's Memeing?</h1>
            <p className="trend-subtitle">Stay ahead of the meme game</p>
            
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${filter === category ? 'active' : ''}`}
                  onClick={() => setFilter(category.toLowerCase())}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="trends-grid">
            {loading ? (
              <div className="loading">Loading trends...</div>
            ) : error ? (
              <div className="error">{error}</div>
            ) : trends.length === 0 ? (
              <div className="no-trends">No trends found</div>
            ) : (
              trends
                .filter(trend => 
                  filter === 'all' || 
                  (trend.category && trend.category.toLowerCase() === filter)
                )
                .map(trend => (
                  <TrendCard 
                    key={trend.id} 
                    {...trend} 
                  />
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingPage;