import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '@/lib/useScrollReveal'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [revealRef, revealed] = useScrollReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="py-16 md:py-24 bg-stone-900">
      <div ref={revealRef} className={`max-w-7xl mx-auto px-4 md:px-8 text-center transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-cream tracking-wide">
          Join for 10% Off
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mt-4 mb-4" />
        <p className="text-stone-400 text-sm max-w-md mx-auto mb-8">
          Subscribe to our newsletter for early access to new collections, exclusive offers, and 10% off your first order.
        </p>

        {submitted ? (
          <p className="font-serif text-lg text-gold">Welcome to Velmora. Check your inbox for your code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 px-5 py-3 bg-stone-800 border border-stone-700 text-cream text-sm placeholder:text-stone-500 focus:outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-gold text-white text-xs tracking-ultra-wide uppercase font-medium hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
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
