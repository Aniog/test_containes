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
    console.error('Global error caught:', event.error || event.message);
    this.setState({ hasError: true });
    event.preventDefault();
  };


  handleUnhandledRejection = (event: PromiseRejectionEvent) => {
    console.error('Unhandled promise rejection:', event.reason);
    this.setState({ hasError: true });
    event.preventDefault();
  };


  handleResourceError = (event: Event) => {
    const target = event.target as HTMLElement;
    console.error('Resource loading error:', target?.tagName);
    this.setState({ hasError: true });
  };

  componentDidMount() {

    window.addEventListener('error', this.handleWindowError, true);
    window.addEventListener('unhandledrejection', this.handleUnhandledRejection);
    window.addEventListener('error', this.handleResourceError, true);
  }

  componentWillUnmount() {
    // 清理事件监听
    window.removeEventListener('error', this.handleWindowError, true);
    window.removeEventListener('unhandledrejection', this.handleUnhandledRejection);
    window.removeEventListener('error', this.handleResourceError, true);
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
    fontSize: '18px',
    color: '#333333',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
};

export default ErrorBoundary;
