import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

console.log('[DIAGNOSTIC] main.jsx loaded, attempting React render...');

try {
  const rootElement = document.getElementById("root");
  console.log('[DIAGNOSTIC] Root element found:', rootElement);
  
  if (!rootElement) {
    throw new Error('Root element not found');
  }
  
  const root = ReactDOM.createRoot(rootElement);
  console.log('[DIAGNOSTIC] React root created');
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  console.log('[DIAGNOSTIC] React render called successfully');
} catch (error) {
  console.error('[DIAGNOSTIC] React render failed:', error);
  
  // Fallback: show error in DOM
  const root = document.getElementById("root");
  if (root) {
    root.innerHTML = `
      <div style="padding: 20px; background: #fee; font-family: sans-serif; color: #c00;">
        <h2>React Failed to Load</h2>
        <p>Error: ${error.message}</p>
        <pre>${error.stack}</pre>
      </div>
    `;
  }
}
