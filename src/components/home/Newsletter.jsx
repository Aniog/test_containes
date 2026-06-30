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
    <section className="py-20 md:py-28 bg-base">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-[11px] text-accent uppercase tracking-[0.2em] mb-3">
          Join Velmora
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Get 10% off your first order
        </h2>
        <p className="font-sans text-sm text-surface/50 mb-8 max-w-md mx-auto">
          Sign up for early access to new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="bg-accent/10 border border-accent/30 px-6 py-4">
            <p className="font-sans text-sm text-accent">Thank you! Check your email for your 10% off code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3 bg-transparent border border-surface/20 text-white placeholder:text-surface/40 font-sans text-sm focus:outline-none focus:border-accent transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
