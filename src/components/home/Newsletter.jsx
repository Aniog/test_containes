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
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="px-8 md:px-16 py-14 md:py-20 text-center max-w-4xl mx-auto bg-espresso" style={{ backgroundColor: '#2C2420' }}>
        <h2 className="font-serif text-3xl md:text-4xl text-cream font-light">
          Join the Velmora World
        </h2>
        <p className="mt-4 text-sm text-cream/70 font-sans">
          Subscribe for 10% off your first order, plus early access to new collections.
        </p>

        {submitted ? (
          <p className="mt-8 text-sm text-gold font-sans font-medium">
            Thank you! Check your inbox for your welcome gift.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-transparent border border-cream/30 text-cream placeholder:text-cream/40 text-sm font-sans focus:outline-none focus:border-gold transition-colors rounded-none"
            />
            <button
              type="submit"
              className="bg-gold text-cream hover:bg-gold-dark transition-colors duration-300 px-8 py-3 text-xs uppercase tracking-widest font-sans font-medium border-none cursor-pointer rounded-none whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
