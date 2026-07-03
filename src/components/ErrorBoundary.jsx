import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("[RENDER ERROR]", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, fontFamily: "monospace", color: "#b91c1c", whiteSpace: "pre-wrap" }}>
          <h2>Render Error</h2>
          <pre>{this.state.error?.stack || String(this.state.error)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}
