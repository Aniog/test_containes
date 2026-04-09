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

  // 处理全局 JS 错误
  handleWindowError = (event: ErrorEvent) => {
    console.error('Global error caught:', event.error || event.message);
    this.setState({ hasError: true });
    event.preventDefault();
  };

  // 处理未处理的 Promise 错误
  handleUnhandledRejection = (event: PromiseRejectionEvent) => {
    console.error('Unhandled promise rejection:', event.reason);
    this.setState({ hasError: true });
    event.preventDefault();
  };

  // 处理资源加载错误
  handleResourceError = (event: Event) => {
    const target = event.target as HTMLElement;
    console.error('Resource loading error:', target?.tagName);
    this.setState({ hasError: true });
  };

  componentDidMount() {
    // 添加全局错误监听
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

  handleRetry = () => {
    this.setState({ hasError: false });
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.container}>
          {/* simple */}
          <style>
            {`
              @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
              @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-5px); } 100% { transform: translateY(0px); } }
            `}
          </style>

          <div style={styles.card}>
            <div style={styles.iconWrapper}>
              {/*  Loading/AI  */}
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#E0E7FF" strokeWidth="3"/>
                <path d="M12 2C6.47715 2 2 6.47715 2 12" stroke="#6366F1" strokeWidth="3" strokeLinecap="round" style={{ animation: 'spin 1.5s linear infinite', transformOrigin: 'center' }}/>
              </svg>
              {/*  */}
              <div style={styles.sparkle}>✨</div>
            </div>

            <h2 style={styles.title}>Finishing Touches...</h2>

            <p style={styles.description}>
              The AI is finalizing the layout for this section. <br/>
              Please refresh to view the generated interface.
            </p>

            <button
              onClick={this.handleRetry}
              style={styles.button}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 5px rgba(99, 102, 241, 0.2)';
              }}
            >
              Load Content
            </button>
          </div>
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
    backgroundColor: '#F9FAFB',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    padding: '20px',
    boxSizing: 'border-box',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.05)',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
    border: '1px solid rgba(255,255,255,0.8)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconWrapper: {
    position: 'relative',
    marginBottom: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px',
    width: '60px',
  },
  sparkle: {
    position: 'absolute',
    top: '-5px',
    right: '-10px',
    fontSize: '20px',
    animation: 'float 2s ease-in-out infinite',
  },
  title: {
    margin: '0 0 12px 0',
    color: '#1F2937',
    fontSize: '20px',
    fontWeight: '600',
    letterSpacing: '-0.025em',
  },
  description: {
    margin: '0 0 32px 0',
    color: '#6B7280',
    fontSize: '15px',
    lineHeight: '1.6',
  },
  button: {
    backgroundColor: '#6366F1',
    color: '#FFFFFF',
    border: 'none',
    padding: '12px 32px',
    fontSize: '14px',
    fontWeight: '500',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 5px rgba(99, 102, 241, 0.2)',
    outline: 'none',
  },
};

export default ErrorBoundary;
