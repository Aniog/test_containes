import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-6 bg-ink text-cream">
          <div className="text-center max-w-md">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Velmora
            </p>
            <h1 className="font-serif text-3xl md:text-4xl mb-4">
              Something went wrong
            </h1>
            <p className="text-cream/70 mb-8">
              We're sorry — an unexpected error occurred. Please try refreshing
              the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-block border border-gold text-gold px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-ink transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
