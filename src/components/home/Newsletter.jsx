import React, { useState } from 'react'

const Newsletter = () => {
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
    <section className="py-16 md:py-20 bg-warm-black">
      <div className="max-w-content mx-auto px-6 md:px-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl tracking-heading uppercase text-cream">
          Join for 10% Off
        </h2>
        <p className="mt-3 font-sans text-sm text-cream/70 max-w-md mx-auto">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="mt-8 font-sans text-sm text-gold">
            Thank you for subscribing! Your 10% discount code is on its way.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-warm-charcoal border border-warm-brown text-cream font-sans text-sm px-4 py-3 placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-gold hover:bg-gold-dark text-warm-black font-sans text-sm tracking-button uppercase px-6 py-3 transition-colors duration-300"
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
