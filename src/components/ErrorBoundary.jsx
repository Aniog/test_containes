import React from "react"

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }
  static getDerivedStateFromError(error) {
    return { error }
  }
  componentDidCatch(error, info) {
    console.error("[ErrorBoundary]", error, info)
  }
  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-ink text-bone">
          <p className="text-[11px] tracking-widest3 uppercase text-bone/60 mb-3">
            Render error
          </p>
          <h1 className="font-serif text-3xl text-bone mb-4">
            Something went wrong.
          </h1>
          <pre className="text-xs text-gold-soft bg-ink-soft p-4 max-w-2xl overflow-auto border border-bone/10">
            {String(this.state.error?.stack || this.state.error?.message || this.state.error)}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}
