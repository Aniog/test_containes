import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Wrap in error boundary for debugging
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return React.createElement('pre', { 
        style: { color: 'red', background: '#111', padding: '40px', fontSize: '16px', whiteSpace: 'pre-wrap' } 
      }, this.state.error.stack || this.state.error.message || String(this.state.error));
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(React.StrictMode, null, 
    React.createElement(ErrorBoundary, null, 
      React.createElement(App)
    )
  )
);
