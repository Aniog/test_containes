import React, { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => {
        setEmail('')
        setSubmitted(false)
      }, 2500)
    }
  }

  return (
    <section className="newsletter py-16">
      <div className="max-w-xl mx-auto px-6 text-center">
        <div className="serif text-3xl tracking-[-0.01em] mb-3 text-[var(--color-offwhite)]">
          Join for 10% off your first order
        </div>
        <p className="text-sm text-white/70 mb-8">
          Be the first to know about new collections and exclusive offers.
        </p>

        {submitted ? (
          <div className="text-[var(--color-gold)] py-3">Thank you. Welcome to the circle.</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="input flex-1"
              required
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter
