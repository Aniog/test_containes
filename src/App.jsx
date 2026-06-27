import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import GeneratorsHub from './pages/GeneratorsHub';
import './App.css';

// Component to handle route changes and notify parent
const RouteTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Notify parent frame of route change
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({
        channel: 'strikingly-preview',
        version: 1,
        type: 'route:changed',
        payload: {
          url: window.location.href,
          origin: window.location.origin,
          pathname: location.pathname,
          search: location.search,
          hash: location.hash,
        }
      }, '*');
    }
  }, [location]);
  
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <RouteTracker />
      <Routes>
        <Route path="/generators" element={<GeneratorsHub />} />
        <Route path="/" element={
          <main className="app-loading-shell">
            <div className="app-loading-content" role="status" aria-live="polite">
              <p className="app-loading-text">
                Welcome to Strikingly AI Generators
              </p>
              <a href="/generators" className="app-loading-link">
                Browse AI Website Generators
              </a>
            </div>
          </main>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
