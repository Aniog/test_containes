import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{padding: "40px", backgroundColor: "#fee", minHeight: "100vh"}}>
          <h1 style={{color: "#c00", fontSize: "32px"}}>Runtime Error Caught!</h1>
          <details style={{whiteSpace: "pre-wrap", marginTop: "20px"}}>
            <summary style={{cursor: "pointer", color: "#c00"}}>Show Error Details</summary>
            <p style={{color: "#c00", marginTop: "10px"}}>
              <strong>Error:</strong> {this.state.error && this.state.error.toString()}
            </p>
            <p style={{color: "#666", marginTop: "10px", fontSize: "12px"}}>
              <strong>Component Stack:</strong><br />
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </p>
          </details>
          <div style={{marginTop: "30px"}}>
            <h2 style={{color: "#333", fontSize: "20px"}}>Debug Info:</h2>
            <p style={{color: "#666"}}>Check the browser console (F12) for more details.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
