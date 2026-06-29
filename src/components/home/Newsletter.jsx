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
    <section className="py-16 md:py-24 bg-warm-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase text-warm-black">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-sm text-warm-black/70 max-w-md mx-auto">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections.
        </p>

        {submitted ? (
          <div className="mt-8">
            <p className="font-serif text-lg text-warm-black">Welcome to Velmora</p>
            <p className="text-sm text-warm-black/60 mt-1">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-warm-black/10 border border-warm-black/20 px-5 py-3 text-sm text-warm-black placeholder:text-warm-black/40 focus:outline-none focus:border-warm-black/40 transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-warm-black text-warm-cream px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-warm-charcoal transition-colors duration-300 flex items-center justify-center gap-2"
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
