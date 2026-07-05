import React, { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [sectionRef, revealed] = useScrollReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section ref={sectionRef} className={`py-20 md:py-28 bg-velmora-charcoal sr-hidden ${revealed ? 'sr-visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-white">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-sm text-stone-400 max-w-md mx-auto">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections.
        </p>
        <div className="w-12 h-px bg-velmora-gold mx-auto mt-6 mb-8" />

        {submitted ? (
          <p className="text-sm text-velmora-gold font-medium animate-fade-in-up">Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 px-4 py-3 bg-white/10 border border-stone-600 text-white text-sm placeholder-stone-500 focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-velmora-gold text-white text-xs font-medium uppercase tracking-wider px-8 py-3 hover:bg-velmora-gold-hover transition-all duration-300 btn-press"
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
