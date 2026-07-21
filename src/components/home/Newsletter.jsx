import React, { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [ref, revealed] = useScrollReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-velmora-charcoal overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-velmora-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-velmora-gold/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className={`relative max-w-2xl mx-auto px-4 sm:px-6 text-center reveal ${revealed ? 'revealed' : ''}`}>
        <div className={`w-12 h-px bg-velmora-gold mx-auto mb-8 ${revealed ? 'line-expand' : ''}`} />
        <h2 className="font-serif text-3xl sm:text-4xl text-velmora-cream tracking-wide">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-base text-velmora-cream/60 font-sans">
          Subscribe to our newsletter and receive 10% off your first order.
        </p>

        {submitted ? (
          <div className="mt-8 py-4">
            <p className="font-serif text-lg text-velmora-gold">Welcome to Velmora</p>
            <p className="text-sm text-velmora-cream/60 font-sans mt-1">Check your inbox for your exclusive code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 bg-transparent border border-velmora-cream/20 text-velmora-cream placeholder:text-velmora-cream/40 font-sans text-sm focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-velmora-gold text-white text-sm tracking-wider uppercase font-sans hover:bg-velmora-gold-hover transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter
