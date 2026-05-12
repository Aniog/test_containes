import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('System rendering interuption (Auto-handled):', error, errorInfo);
  }


  handleWindowError = (event: ErrorEvent) => {
    // Ignore resource-loading errors (images, fonts, etc.) — only handle JS errors
    const target = event.target as HTMLElement | null;
    if (target && target !== window && target.tagName) {
      // This is a resource error (img, script, link) — not a JS crash, skip it
      return;
    }
    console.error('Global error caught:', event.error || event.message);
    this.setState({ hasError: true });
    event.preventDefault();
  };


  handleUnhandledRejection = (event: PromiseRejectionEvent) => {
    console.warn('Unhandled promise rejection (non-fatal):', event.reason);
    // Do not set hasError — unhandled rejections from async ops (e.g. image fetch)
    // should not crash the entire UI.
    event.preventDefault();
  };


  componentDidMount() {
    window.addEventListener('error', this.handleWindowError, true);
    window.addEventListener('unhandledrejection', this.handleUnhandledRejection);
  }

  componentWillUnmount() {
    window.removeEventListener('error', this.handleWindowError, true);
    window.removeEventListener('unhandledrejection', this.handleUnhandledRejection);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.container}>
          <p style={styles.text}>Agent is creating the web site, please wait</p>
        </div>
      );
    }

    return this.props.children;
  }
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#ffffff',
    margin: 0,
    padding: 0,
  },
  text: {
    fontSize: '32px',
    color: '#333333',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
};

export default ErrorBoundary;
