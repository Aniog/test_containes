import { Component } from 'react'
import Button from '../ui/Button'

export default class AppErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('App render error:', error, errorInfo)
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-shell px-4 py-16 text-ink">
          <div className="w-full max-w-2xl rounded-[32px] border border-parchment bg-mist p-8 shadow-card md:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-bronze">Velmora storefront</p>
            <h1 className="mt-4 font-serif text-4xl text-ink md:text-5xl">We hit a rendering issue</h1>
            <p className="mt-4 text-base leading-7 text-stone">
              The storefront could not finish loading. The error details are shown below so it can be fixed quickly.
            </p>
            <pre className="mt-6 overflow-x-auto rounded-[24px] bg-obsidian px-5 py-4 text-sm leading-6 text-shell">
              {this.state.error?.stack || this.state.error?.message || 'Unknown error'}
            </pre>
            <div className="mt-6">
              <Button onClick={this.handleReload}>Reload page</Button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
