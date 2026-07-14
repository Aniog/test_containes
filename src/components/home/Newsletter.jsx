import React, { useState } from 'react'

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
    <section className="py-16 md:py-24 bg-charcoal">
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream tracking-wide">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-sm text-stone-400 font-sans max-w-md mx-auto">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections and exclusive offers.
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
              className="w-full sm:flex-1 bg-transparent border border-stone-600 text-cream placeholder-stone-500 text-sm font-sans px-4 py-3 focus:outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-gold hover:bg-gold-hover text-cream font-sans text-xs font-semibold tracking-widest uppercase px-8 py-3 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
