import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('Velmora error boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-10 text-center">
          <h1 className="font-serif text-2xl mb-4">Something went wrong</h1>
          <pre className="text-left bg-gray-100 p-4 text-xs overflow-auto">
            {this.state.error?.toString()}\n{this.state.error?.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}
