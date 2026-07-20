import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-20 text-center">
      <span className="text-xs tracking-[0.15em] text-velmora-gold">JOIN THE CIRCLE</span>
      <h2 className="serif text-4xl tracking-wide mt-3 mb-3">Join for 10% off your first order</h2>
      <p className="text-velmora-text-light mb-8">Be the first to know about new collections and exclusive offers.</p>

      {submitted ? (
        <p className="text-velmora-gold py-4">Thank you. Welcome to the circle.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="newsletter-input flex-1"
            required
          />
          <button type="submit" className="btn btn-primary whitespace-nowrap">
            Subscribe
          </button>
        </form>
      )}
    </section>
  )
}
