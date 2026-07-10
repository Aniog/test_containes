import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [revealRef, isVisible] = useScrollReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section ref={revealRef} className="py-20 md:py-28 bg-brand-charcoal relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-brand-gold/20" />

      <div className={`max-w-7xl mx-auto section-padding text-center reveal ${isVisible ? 'revealed' : ''}`}>
        <div className="w-8 h-px bg-brand-gold/40 mx-auto mb-8" />
        <h2 className="font-serif text-display-sm md:text-display text-brand-cream">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-sm text-brand-warm-gray-lighter max-w-md mx-auto leading-relaxed">
          Subscribe to our newsletter for exclusive access to new collections, styling tips, and 10% off your first order.
        </p>

        {submitted ? (
          <div className="mt-8">
            <p className="text-brand-gold font-serif text-lg">Welcome to Velmora</p>
            <p className="text-sm text-brand-warm-gray-lighter mt-2">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 px-5 py-3.5 bg-white/5 border border-white/15 text-brand-cream placeholder:text-brand-warm-gray/50 text-sm focus:outline-none focus:border-brand-gold/50 transition-colors duration-300 tracking-wide"
            />
            <button type="submit" className="btn-accent text-xs whitespace-nowrap flex items-center gap-2 py-3.5 px-6">
              Subscribe <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="mt-5 text-[11px] text-brand-warm-gray/50 tracking-wide">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
