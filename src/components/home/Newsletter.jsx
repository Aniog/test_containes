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
    <section className="py-20 md:py-28 bg-cream">
      <div
        ref={sectionRef}
        className={`max-w-2xl mx-auto px-4 md:px-8 text-center transition-all duration-700 ease-out ${
          revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <h2 className="font-serif text-2xl md:text-4xl font-light text-charcoal tracking-wide">
          Join for 10% Off
        </h2>
        <p className="mt-4 text-sm text-stone font-light">
          Subscribe to receive exclusive access to new collections, styling tips, and 10% off your first order.
        </p>

        {submitted ? (
          <div className="mt-8 py-4">
            <p className="font-serif text-lg text-charcoal">Welcome to Velmora</p>
            <p className="text-sm text-stone mt-2 font-light">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-stone/30 text-charcoal text-sm px-4 py-3 placeholder:text-stone/50 focus:outline-none focus:border-gold transition-colors font-light"
            />
            <button
              type="submit"
              className="bg-gold text-charcoal text-xs tracking-[0.15em] uppercase font-sans font-medium px-8 py-3 hover:bg-gold-light transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-stone/50 font-light">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}

export default Newsletter
