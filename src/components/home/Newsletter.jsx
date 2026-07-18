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
    <section className="py-20 md:py-28 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white tracking-extra-wide uppercase">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-sm font-sans text-white/60 max-w-md mx-auto">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections.
        </p>

        {submitted ? (
          <div className="mt-8 animate-fade-in">
            <p className="font-serif text-lg text-brand-gold">Welcome to Velmora</p>
            <p className="text-sm font-sans text-white/50 mt-2">Check your inbox for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm font-sans px-5 py-3 focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-brand-gold text-white text-xs font-sans font-medium tracking-extra-wide uppercase px-8 py-3 hover:bg-brand-gold-dark transition-colors flex items-center justify-center gap-2"
            >
              Subscribe <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter
