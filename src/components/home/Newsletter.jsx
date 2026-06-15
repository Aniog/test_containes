import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-charcoal" />
      <div
        data-strk-bg-id="newsletter-bg"
        data-strk-bg="gold jewelry collection warm ambient light editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-cover bg-center opacity-20"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <p className="text-overline font-medium tracking-[0.25em] text-gold-muted uppercase mb-3">
          Stay Connected
        </p>
        <h2 className="font-serif text-display-sm text-white mb-4">
          Join for 10% Off
        </h2>
        <p className="text-body text-white/60 mb-8 max-w-md mx-auto">
          Subscribe to receive exclusive offers, early access to new collections,
          and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-scale-in">
            <p className="font-serif text-heading-sm text-gold-light">
              Welcome to the Velmora family.
            </p>
            <p className="text-body-sm text-white/50 mt-2">
              Check your inbox for your 10% off code.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full sm:flex-1 px-5 py-3.5 bg-white/10 border border-white/20 rounded text-body text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-gold text-charcoal text-body font-semibold tracking-wider uppercase rounded hover:bg-gold-light transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-body-sm text-white/25 mt-5">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
