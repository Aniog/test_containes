import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

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
    <section className="py-16 md:py-24 bg-charcoal">
      <div className="max-w-container mx-auto px-5 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-cream mb-3">
          Join for 10% Off
        </h2>
        <p className="font-sans text-sm text-cream/60 mb-8 max-w-md mx-auto">
          Subscribe to our newsletter for early access to new collections, exclusive offers, and 10% off your first order.
        </p>

        {submitted ? (
          <p className="font-sans text-sm text-gold">Welcome to Velmora! Check your inbox for your discount code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-transparent border border-cream/20 text-cream font-sans text-sm px-5 py-3.5 placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-gold hover:bg-gold-hover text-cream font-sans text-xs uppercase tracking-btn font-medium px-8 py-3.5 flex items-center justify-center gap-2 transition-colors duration-200"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
