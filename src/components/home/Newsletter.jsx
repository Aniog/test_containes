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
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-cream">
          Join for 10% Off
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mt-4 mb-4" />
        <p className="text-cream/60 text-sm mb-8">
          Subscribe to our newsletter for exclusive access to new collections, special offers, and 10% off your first order.
        </p>

        {submitted ? (
          <p className="text-gold font-serif text-lg">Welcome to Velmora. Check your inbox for your code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-cream/20 text-cream px-4 py-3 text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-cream px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-gold-dark transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
