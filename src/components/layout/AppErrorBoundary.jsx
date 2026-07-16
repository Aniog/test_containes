import React from 'react'

export default class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('Velmora runtime error', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div className="section-shell flex min-h-screen items-center justify-center py-24">
          <div className="max-w-2xl rounded-3xl border border-champagne bg-pearl p-8 shadow-card">
            <p className="eyebrow">Runtime issue</p>
            <h1 className="mt-3 font-serif text-4xl text-espresso">
              The storefront hit an error while rendering.
            </h1>
            <p className="mt-4 text-sm leading-7 text-mocha">
              {this.state.error?.message || 'Unknown error'}
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
