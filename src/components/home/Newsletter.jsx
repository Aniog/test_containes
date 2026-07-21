import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="py-16 md:py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-cream">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-stone-400 text-sm max-w-md mx-auto">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections.
        </p>

        {submitted ? (
          <p className="mt-8 text-gold font-serif text-lg">Welcome to Velmora. Check your inbox for your code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-white/10 border border-stone-700 text-cream placeholder-stone-500 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-gold text-white px-8 py-3 text-xs font-semibold uppercase tracking-wide-product hover:bg-gold-light transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
