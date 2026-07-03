import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const Newsletter = () => {
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
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-cream">
          Join for 10% Off
        </h2>
        <p className="mt-3 font-sans text-stone-400 text-sm md:text-base">
          Subscribe to our newsletter for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <div className="mt-8 py-4">
            <p className="font-serif text-lg text-gold">Welcome to Velmora</p>
            <p className="font-sans text-sm text-stone-400 mt-2">
              Check your inbox for your 10% discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 bg-stone-800 border border-stone-700 text-cream font-sans text-sm placeholder:text-stone-500 focus:outline-none focus:border-gold transition-colors"
            />
            <button type="submit" className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap">
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="mt-4 font-sans text-xs text-stone-600">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}

export default Newsletter
