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
    <section className="py-16 md:py-24 bg-charcoal">
      <div className="max-w-content mx-auto px-5 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">Join for 10% Off</h2>
        <p className="font-sans text-sm text-white/60 mb-8 max-w-md mx-auto">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections.
        </p>
        {submitted ? (
          <p className="font-sans text-sm text-gold">Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-transparent border border-white/30 text-white placeholder-white/40 font-sans text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-white font-sans text-xs tracking-product uppercase px-8 py-3 transition-colors duration-300"
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
