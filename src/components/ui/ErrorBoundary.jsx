import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, info: null }
  }
  static getDerivedStateFromError(error) {
    return { error }
  }
  componentDidCatch(error, info) {
    console.error('Route error:', error, info)
    this.setState({ error, info })
  }
  render() {
    if (!this.state.error) return this.props.children
    if (import.meta.env.PROD) {
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-32">
          <p className="eyebrow">Error</p>
          <h1 className="mt-4 font-serif text-4xl text-espresso font-light">
            Something went wrong.
          </h1>
          <a href="/" className="mt-8 btn-primary">Back Home</a>
        </div>
      )
    }
    return (
      <div style={{ padding: 40, color: '#5C3A1E', fontFamily: 'monospace' }}>
        <h2 style={{ fontSize: 18, marginBottom: 12 }}>Route crashed:</h2>
        <pre style={{ whiteSpace: 'pre-wrap', fontSize: 12 }}>
          {String(this.state.error?.stack || this.state.error)}
        </pre>
        {this.state.info && (
          <pre style={{ whiteSpace: 'pre-wrap', fontSize: 11, marginTop: 12, color: '#888' }}>
            {this.state.info.componentStack}
          </pre>
        )}
      </div>
    )
  }
}
