import React from 'react';

export default function TestApp() {
  console.log('TestApp component is rendering!');
  return (
    <div style={{ padding: '20px', backgroundColor: '#e0f0e0' }}>
      <h1 style={{ color: 'green' }}>✓ React is Working!</h1>
      <p>If you can see this, React is rendering correctly.</p>
      <p>Check the browser console for the log message.</p>
    </div>
  );
}
