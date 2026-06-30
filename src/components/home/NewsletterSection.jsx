import React, { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="py-16 md:py-24 bg-[var(--velmora-dark)] text-white">
      <div className="container-wide text-center max-w-xl mx-auto px-4">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">Stay Connected</p>
        <h2 className="font-serif-display text-4xl md:text-5xl mb-4">Join for 10% Off</h2>
        <p className="text-sm text-white/70 mb-8">
          Your first order, on us. Plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif-display text-2xl italic mb-2">Welcome to Velmora</p>
            <p className="text-sm text-white/60">Check your inbox for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[var(--velmora-accent)] transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-[var(--velmora-accent)] text-white px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-[var(--velmora-accent-hover)] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
