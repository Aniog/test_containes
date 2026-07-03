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
      <div className="max-w-content mx-auto px-5 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream tracking-wide">
          Join for 10% Off
        </h2>
        <p className="text-cream/60 mt-3 text-sm max-w-md mx-auto">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections.
        </p>

        {submitted ? (
          <div className="mt-8">
            <p className="text-gold font-serif text-lg">Welcome to Velmora</p>
            <p className="text-cream/50 text-sm mt-1">Check your inbox for your discount code</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-transparent border border-cream/20 text-cream placeholder:text-cream/30 px-5 py-3.5 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-gold text-white text-xs tracking-nav uppercase font-semibold px-8 py-3.5 hover:bg-gold-dark transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
