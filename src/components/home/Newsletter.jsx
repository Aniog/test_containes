import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('submitting')
    // Simulate subscription
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 800)
  }

  return (
    <section className="bg-warm-charcoal">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white font-semibold">
          Join the Inner Circle
        </h2>
        <p className="text-white/60 mt-3 text-sm md:text-base max-w-sm mx-auto">
          Subscribe for 10% off your first order, early access to new collections, and
          curated styling inspiration.
        </p>

        {status === 'success' ? (
          <p className="text-gold mt-8 text-sm font-medium">
            Thank you! Check your inbox for your welcome code.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-5 py-3.5 text-sm outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="bg-gold text-white px-8 py-3.5 text-sm font-medium tracking-[0.15em] uppercase hover:bg-gold-hover transition-colors duration-300 disabled:opacity-60"
            >
              {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}