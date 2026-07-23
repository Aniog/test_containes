import { Component } from 'react'

const isDev = import.meta.env.DEV

class AppErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Velmora rendering error', error, errorInfo)
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-stone-50 px-5 py-16 text-stone-900 sm:px-6 lg:px-8">
          <div className="w-full max-w-3xl rounded-[2rem] border border-stone-300/70 bg-stone-100/80 p-8 shadow-[0_18px_45px_rgba(28,25,23,0.08)] md:p-10">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-700">Preview issue</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-stone-900 md:text-5xl">
              We hit a rendering error.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-700 md:text-base">
              The storefront is still loading local changes, but one component failed while rendering. I’m using this message to surface the exact issue and recover the preview safely.
            </p>
            <div className="mt-6 rounded-[1.5rem] border border-stone-300 bg-stone-950 px-5 py-4 text-sm leading-7 text-stone-100">
              <p>{this.state.error.message || 'Unknown rendering error'}</p>
            </div>
            {isDev ? (
              <pre className="mt-4 overflow-x-auto rounded-[1.5rem] border border-stone-300 bg-stone-900/95 px-5 py-4 text-xs leading-6 text-stone-200 whitespace-pre-wrap">
                {this.state.error.stack || this.state.error.message}
              </pre>
            ) : null}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default AppErrorBoundary
