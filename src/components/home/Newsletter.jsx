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
    <section className="py-16 md:py-24 bg-stone-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-container mx-auto px-5 md:px-8 text-center relative z-10">
        <div className="w-12 h-px bg-gold mx-auto mb-6" />
        <h2 className="font-serif text-3xl md:text-4xl text-warm-white tracking-wide">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-3 text-sm text-stone-400 max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-8">
            <p className="font-serif text-lg text-gold">Welcome to Velmora</p>
            <p className="text-sm text-stone-400 mt-1">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-stone-800 border border-stone-700 text-warm-white placeholder-stone-500 px-5 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-gold text-warm-white px-8 py-3 text-xs uppercase tracking-btn font-semibold hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 flex items-center justify-center gap-2"
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
