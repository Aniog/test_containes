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
    <section className="py-16 md:py-24 bg-velmora-espresso">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wider uppercase text-velmora-cream">
          Join for 10% Off
        </h2>
        <p className="font-sans text-sm text-velmora-warm/70 mt-2 mb-8">
          Subscribe to receive exclusive offers, new arrivals, and 10% off your first order.
        </p>

        {submitted ? (
          <p className="font-sans text-sm text-velmora-gold">
            Thank you for subscribing! Check your inbox for your 10% discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full md:w-auto flex-1 px-4 py-3 bg-transparent border border-velmora-warm/30 text-velmora-cream placeholder:text-velmora-warm/40 font-sans text-sm focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button type="submit" className="accent-button px-6 py-3 text-sm rounded-none w-full md:w-auto">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter
