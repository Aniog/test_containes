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
    <section className="py-20 md:py-28 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-display-sm md:text-display text-white mb-3">
          Join for 10% Off
        </h2>
        <p className="font-sans text-sm text-white/60 max-w-md mx-auto mb-8">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="font-serif text-lg text-brand-gold">Welcome to Velmora. Check your inbox for your code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-transparent border-b border-white/30 focus:border-brand-gold text-white font-sans text-sm py-3 px-1 outline-none transition-colors placeholder:text-white/30"
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-sans text-xs uppercase tracking-wide font-semibold px-8 py-3.5 transition-colors duration-300"
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

export default Newsletter
