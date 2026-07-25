import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

console.log('main.jsx: Starting to load...');

// Global error handler
window.addEventListener('error', function(event) {
  console.error('Global error caught:', event.error);
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `
      <div style="padding: 40px; font-family: system-ui;">
        <h1 style="color: #d32f2f; font-size: 28px; margin-bottom: 16px;">
          JavaScript Error
        </h1>
        <div style="background: #fff3f3; padding: 20px; border-radius: 8px; border: 1px solid #ffcdd2;">
          <p style="margin: 8px 0;"><strong>Error:</strong> ${event.error?.message || 'Unknown error'}</p>
          <p style="margin: 8px 0;"><strong>File:</strong> ${event.filename || 'Unknown'}</p>
          <p style="margin: 8px 0;"><strong>Line:</strong> ${event.lineno || 'Unknown'}</p>
          <details style="margin-top: 16px;">
            <summary style="cursor: pointer; font-weight: 600;">Stack Trace</summary>
            <pre style="background: #f5f5f5; padding: 12px; border-radius: 4px; overflow-x: auto; font-size: 12px; margin-top: 8px;">
${event.error?.stack || 'No stack trace available'}
            </pre>
          </details>
        </div>
      </div>
    `;
  }
});

try {
  console.log('main.jsx: Creating React root...');
  const root = document.getElementById('root');
  
  if (!root) {
    throw new Error('Root element not found!');
  }
  
  console.log('main.jsx: Root element found, rendering App...');
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  console.log('main.jsx: App rendered successfully!');
} catch (error) {
  console.error('Error in main.jsx:', error);
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `
      <div style="padding: 40px; color: red;">
        <h1>Error in main.jsx</h1>
        <p>${error.message}</p>
        <pre>${error.stack}</pre>
      </div>
    `;
  }
}
