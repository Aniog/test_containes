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
    <section className="py-20 md:py-28 bg-warm-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-white">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-4 text-warm-gray-light text-sm max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-8">
            <p className="font-serif text-gold text-lg">Welcome to Velmora.</p>
            <p className="text-warm-gray-light text-sm mt-2">Check your inbox for your 10% code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-white/10 border border-white/20 text-white placeholder-warm-gray px-5 py-4 text-sm tracking-wide focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-gold text-warm-black text-[11px] tracking-[0.15em] uppercase font-semibold px-8 py-4 hover:bg-gold-dark transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
