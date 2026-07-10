import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-brand-cream p-8">
          <div className="text-center max-w-md">
            <h1 className="font-serif text-2xl text-brand-charcoal mb-4">Something went wrong</h1>
            <p className="text-sm text-brand-warm-gray mb-2">{this.state.error?.message}</p>
            <pre className="text-xs text-red-500 bg-red-50 p-3 rounded overflow-auto max-h-40 text-left">{this.state.error?.stack}</pre>
            <button
              onClick={() => { this.setState({ hasError: false, error: null }); window.location.reload() }}
              className="btn-accent mt-6 text-xs"
            >
              Reload Page
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
