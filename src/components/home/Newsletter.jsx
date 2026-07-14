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
    <section className="bg-charcoal py-16 md:py-20">
      <div className="container-wide text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-white">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-3 text-stone-400 font-sans text-sm max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="mt-8 text-gold-light font-sans text-sm tracking-wide">
            Welcome to Velmora! Check your inbox for your 10% discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder-stone-400 font-sans text-sm tracking-wide focus:outline-none focus:border-gold transition-colors"
            />
            <button type="submit" className="btn-primary flex items-center gap-2 whitespace-nowrap">
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
