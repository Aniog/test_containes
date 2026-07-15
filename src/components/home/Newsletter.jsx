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
    <section className="py-16 md:py-20 bg-gold/10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-sans text-xs tracking-superwide uppercase text-gold mb-3">Stay in Touch</p>
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-charcoal-400 mb-8 max-w-md mx-auto">
          Be the first to discover new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-xl text-gold">Welcome to Velmora</p>
            <p className="text-sm text-charcoal-400 mt-2">Check your inbox for your exclusive discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-white border border-charcoal-200 text-charcoal text-sm font-sans placeholder:text-charcoal-300 focus:outline-none focus:border-gold transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}

        <p className="font-sans text-[11px] text-charcoal-300 mt-4">
          Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  )
}
