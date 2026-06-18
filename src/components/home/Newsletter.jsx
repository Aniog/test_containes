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
    <section className="py-16 md:py-24 bg-brand-charcoal">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-brand-cream">
          Join the Inner Circle
        </h2>
        <p className="mt-3 text-sm text-brand-warm-gray font-sans">
          Be the first to know about new arrivals and receive 10% off your first order.
        </p>

        {submitted ? (
          <p className="mt-8 text-sm text-brand-gold font-sans">
            Welcome to Velmora. Check your inbox for your exclusive offer.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 border-b border-brand-warm-gray bg-transparent py-2.5 text-sm text-brand-cream placeholder:text-brand-warm-gray focus:border-brand-gold transition-colors font-sans"
            />
            <button
              type="submit"
              className="bg-brand-gold text-white px-6 py-2.5 text-xs tracking-widest uppercase font-sans font-medium hover:bg-brand-gold-dark transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
