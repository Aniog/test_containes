import React, { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="py-20 md:py-28 bg-velmora-gold">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-wide">
          Join for 10% Off
        </h2>
        <p className="font-sans text-sm text-stone-700 mt-3 tracking-wider">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections.
        </p>

        {submitted ? (
          <div className="mt-8">
            <p className="font-serif text-xl text-stone-900">
              Welcome to Velmora
            </p>
            <p className="font-sans text-sm text-stone-700 mt-2">
              Your 10% discount code is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 bg-white/90 border border-stone-300 text-stone-800 font-sans text-sm placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-stone-900 text-velmora-gold font-serif uppercase tracking-widest px-6 py-3 text-sm hover:bg-stone-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="font-sans text-xs text-stone-600 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}

export default Newsletter
