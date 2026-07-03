import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("[RENDER ERROR]", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-cream px-6 text-center">
          <p className="font-serif text-2xl uppercase tracking-[0.2em] text-ink">
            Velmora
          </p>
          <p className="font-serif text-xl text-ink">
            Something went wrong
          </p>
          <p className="max-w-md font-sans text-sm text-ink/60">
            We're sorry — an unexpected error occurred. Please refresh the page
            or return to the homepage.
          </p>
          <a
            href="/"
            className="mt-2 border border-ink px-6 py-3 font-sans text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            Back to Home
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}
