import React, { useState } from 'react'

export default function Newsletter() {
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
    <section className="py-16 md:py-20 bg-[var(--velmora-text)] text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="serif-heading text-2xl md:text-3xl lg:text-4xl tracking-[0.05em] mb-3">
          Join for 10% Off
        </h2>
        <p className="text-sm text-white/70 mb-8">
          Your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="serif-heading text-xl text-[var(--velmora-gold-light)] mb-2">
              Welcome to Velmora
            </p>
            <p className="text-sm text-white/70">
              Check your inbox for your discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-[var(--velmora-gold)] transition-colors"
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
