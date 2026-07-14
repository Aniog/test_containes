import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function MinimalApp() {
  return (
    <div style={{ padding: '40px', fontFamily: 'serif', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Velmora Fine Jewelry</h1>
      <p style={{ fontSize: '1.25rem', color: '#666' }}>Test - React is working!</p>
      <div style={{ marginTop: '2rem' }}>
        <button 
          onClick={() => alert('Cart clicked!')}
          style={{
            padding: '12px 24px',
            backgroundColor: '#C9A96E',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Test Cart Button
        </button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MinimalApp />
  </React.StrictMode>
);
