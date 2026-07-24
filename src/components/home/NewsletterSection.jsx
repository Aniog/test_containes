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
    <section className="py-16 md:py-20 bg-[var(--color-charcoal)] text-[var(--color-cream)]">
      <div className="max-w-2xl mx-auto text-center px-4">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-4">Exclusive Access</p>
        <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl tracking-wide mb-4">
          Join for 10% Off
        </h2>
        <p className="text-sm text-[var(--color-warm-gray)] mb-8">
          Your first order, on us. Plus early access to new collections and members-only offers.
        </p>
        {submitted ? (
          <div className="animate-fade-in">
            <p className="serif-heading text-xl text-[var(--color-gold)] mb-2">Welcome to Velmora</p>
            <p className="text-sm text-[var(--color-warm-gray)]">Check your inbox for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-transparent border border-[var(--color-dark)] text-[var(--color-cream)] placeholder-[var(--color-warm-gray)] text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors"
              required
            />
            <button type="submit" className="btn-accent whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
