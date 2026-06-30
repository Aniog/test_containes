import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="py-16 md:py-24 bg-velmora-bg">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-velmora-accent px-6 py-14 md:py-20 text-center">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/80 mb-3">
            Join the Inner Circle
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">
            Join for 10% Off Your First Order
          </h2>
          <p className="font-sans text-sm text-white/80 max-w-md mx-auto mb-8 font-light">
            Be the first to know about new drops, exclusive offers, and styling
            inspiration.
          </p>

          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status !== 'idle') setStatus('idle')
              }}
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/30 px-4 py-3.5 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors font-sans"
            />
            <button
              type="submit"
              className="bg-white text-velmora-accent px-8 py-3.5 uppercase tracking-[0.16em] text-xs font-sans font-semibold hover:bg-velmora-bg transition-colors"
            >
              Subscribe
            </button>
          </form>

          {status === 'error' && (
            <p className="mt-4 font-sans text-xs text-white">
              Please enter a valid email address.
            </p>
          )}
          {status === 'success' && (
            <p className="mt-4 font-sans text-xs text-white">
              Welcome — your 10% off code is on its way.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
