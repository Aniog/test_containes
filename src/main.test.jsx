import React from 'react';
import ReactDOM from 'react-dom/client';

console.log('Test main.jsx loading...');

function TestApp() {
  return (
    <div style={{ padding: '50px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '48px', color: '#333' }}>Velmora Test</h1>
      <p style={{ fontSize: '18px' }}>If you see this, React is working!</p>
      <div style={{ marginTop: '20px', padding: '20px', backgroundColor: 'white', borderRadius: '8px' }}>
        <h2>Debug Checklist:</h2>
        <ul>
          <li>✓ React is loading</li>
          <li>✓ Components are rendering</li>
          <li>✓ No JavaScript errors (check console)</li>
        </ul>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TestApp />
  </React.StrictMode>
);

console.log('TestApp rendered');
