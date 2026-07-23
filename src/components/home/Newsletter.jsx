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
    <section className="py-16 md:py-24 bg-deepCharcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-textLight">
          Join for 10% Off
        </h2>
        <p className="font-sans text-sm text-textMuted mt-3 max-w-md mx-auto">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <div className="mt-8">
            <p className="font-serif text-lg text-gold">Thank you for subscribing!</p>
            <p className="font-sans text-sm text-textMuted mt-2">Your 10% discount code is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:w-auto flex-1 font-sans text-sm px-5 py-3 bg-warmCream/10 border border-divider/30 rounded-sm text-textLight placeholder:text-textMuted focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto font-sans text-sm tracking-[0.1em] uppercase font-medium bg-gold text-deepCharcoal px-8 py-3 rounded-sm hover:bg-goldLight transition-colors"
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
