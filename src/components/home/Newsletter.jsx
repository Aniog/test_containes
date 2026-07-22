import React, { useState } from 'react'

export default function Newsletter() {
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
    <section className="bg-charcoal py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-cream mb-4">
            Join for 10% Off
          </h2>
          <p className="font-sans text-sm text-text-muted-light mb-8">
            Subscribe to our newsletter for early access to new collections, exclusive offers, and 10% off your first order.
          </p>

          {submitted ? (
            <div className="py-4">
              <p className="font-serif text-lg text-gold">Thank you for subscribing!</p>
              <p className="font-sans text-sm text-text-muted-light mt-2">Your 10% discount code is on its way.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-transparent border border-divider-dark text-cream font-sans text-sm px-4 py-3 placeholder:text-text-muted-light focus:outline-none focus:border-gold transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-gold text-charcoal font-sans text-xs tracking-ui uppercase px-6 py-3 hover:bg-gold-light transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
