import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const Newsletter = () => {
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
    <section className="py-16 md:py-24 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-white">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-sm text-white/60 max-w-md mx-auto">
          Subscribe to our newsletter for exclusive access to new collections, styling tips, and 10% off your first order.
        </p>
        <div className="w-12 h-px bg-brand-gold mx-auto mt-6 mb-8" />

        {submitted ? (
          <p className="text-sm text-brand-gold-light font-medium">
            Welcome to Velmora! Check your inbox for your 10% discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-brand-gold text-white text-xs uppercase tracking-btn font-medium px-8 py-3 hover:bg-brand-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
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
