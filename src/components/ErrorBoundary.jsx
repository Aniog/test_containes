import React from "react";

/**
 * Visible error boundary. If anything in the React tree throws during
 * render, we surface the error in a clearly styled overlay rather than
 * leaving the user staring at a blank page.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    this.setState({ info });
    // Keep the original console error so dev tools still show it.
    // eslint-disable-next-line no-console
    console.error("[Velmora] Render error:", error, info);
  }

  handleReset = () => {
    this.setState({ error: null, info: null });
  };

  handleReload = () => {
    if (typeof window !== "undefined") window.location.reload();
  };

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <div className="min-h-screen flex items-center justify-center bg-cream px-6 py-20">
        <div className="max-w-xl w-full border border-hairline bg-surface p-8 md:p-12 shadow-soft">
          <div className="eyebrow text-gold-600 mb-4">Velmora · render error</div>
          <h1 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
            Something didn't finish setting itself.
          </h1>
          <p className="text-taupe mt-4 leading-relaxed">
            The page hit an error while loading. You can try again, or come back in a
            moment — we'll have it polished.
          </p>
          {process.env.NODE_ENV !== "production" && (
            <pre className="mt-6 p-4 bg-ink-900 text-cream text-xs overflow-auto max-h-64 whitespace-pre-wrap">
              {String(this.state.error?.stack || this.state.error?.message || this.state.error)}
            </pre>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={this.handleReset}
              className="btn-gold"
            >
              Try again
            </button>
            <button
              type="button"
              onClick={this.handleReload}
              className="inline-flex items-center justify-center px-7 py-3.5 text-[11px] uppercase tracking-widest2 font-medium border border-ink text-ink hover:bg-ink hover:text-cream transition-colors duration-500 ease-elegant"
            >
              Reload page
            </button>
          </div>
        </div>
      </div>
    );
  }
}
