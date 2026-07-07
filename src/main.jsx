import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info);
  }
  render() {
    if (this.state.error) {
      return React.createElement('pre', { style: { color: 'red', padding: '20px', fontSize: '14px', whiteSpace: 'pre-wrap' } },
        'React Error Boundary caught:\n' +
        (this.state.error?.message || String(this.state.error)) + '\n\n' +
        (this.state.error?.stack || '')
      );
    }
    return this.props.children;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  React.createElement(React.StrictMode, null,
    React.createElement(ErrorBoundary, null,
      React.createElement(App)
    )
  )
);
