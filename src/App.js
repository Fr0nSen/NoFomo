import React from 'react';
import './styles/theme.css';
import './styles/components.css';
import './styles/index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TrendingPage from './pages/TrendingPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar glass">
          <div className="container">
            <Link to="/" className="logo">NOFOMO</Link>
            <ul className="nav-links">
              <li><Link to="/trending">Trending</Link></li>
              <li><Link to="/filters">Filters</Link></li>
              <li><button className="btn-login">Login</button></li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trending" element={<TrendingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
