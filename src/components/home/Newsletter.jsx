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
    <section className="py-16 md:py-20 px-4 bg-brand-gold-wash">
      <div className="max-w-2xl mx-auto text-center">
        <p className="section-subtitle text-brand-gold mb-3">Stay Connected</p>
        <h2 className="font-serif text-display text-brand-charcoal mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-brand-warm text-sm mb-8 max-w-md mx-auto">
          Be the first to discover new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="font-sans text-brand-gold text-sm tracking-wider">
            Thank you! Check your inbox for your welcome discount.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-white border border-brand-linen text-brand-charcoal text-sm placeholder:text-brand-warm/50 focus:outline-none focus:border-brand-gold transition-colors"
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
