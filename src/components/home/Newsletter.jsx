import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [ref, isVisible] = useScrollReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section ref={ref} className="py-16 md:py-24 bg-warm-black">
      <div className={`max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
        <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-white">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-sm text-stone max-w-md mx-auto">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections.
        </p>
        <div className="w-12 h-px bg-gold mx-auto mt-6 mb-8" />

        {submitted ? (
          <p className="text-gold font-serif text-lg transition-opacity duration-500">Welcome to Velmora. Check your inbox for your code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-stone text-sm focus:outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-gold text-warm-black px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-dark hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter
