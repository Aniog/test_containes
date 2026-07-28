import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Capture unhandled errors and display them
window.onerror = function(message, source, lineno, colno, error) {
  document.title = "ERR:" + message;
  const root = document.getElementById("root");
  if (root) {
    root.innerHTML = '<pre style="color:red;padding:20px;white-space:pre-wrap">' + 
      'ERROR: ' + message + '\nSource: ' + source + '\nLine: ' + lineno + 
      '\nStack: ' + (error && error.stack || 'N/A') + '</pre>';
  }
};

window.addEventListener("unhandledrejection", function(e) {
  document.title = "REJ:" + (e.reason && e.reason.message || e.reason);
  const root = document.getElementById("root");
  if (root) {
    root.innerHTML = '<pre style="color:red;padding:20px;white-space:pre-wrap">' + 
      'UNHANDLED: ' + (e.reason && e.reason.message || e.reason) + 
      '\nStack: ' + (e.reason && e.reason.stack || 'N/A') + '</pre>';
  }
});

const rootEl = document.getElementById("root");
if (!rootEl) {
  document.body.innerHTML = '<pre style="color:red">No root element found</pre>';
} else {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
