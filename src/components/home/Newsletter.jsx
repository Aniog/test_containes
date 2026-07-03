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
    <section className="py-16 md:py-24 bg-velmora-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide uppercase text-velmora-cream">
          Join for 10% Off
        </h2>
        <p className="mt-3 font-sans text-sm text-velmora-warm-gray max-w-md mx-auto">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections.
        </p>

        {submitted ? (
          <p className="mt-8 font-sans text-sm text-velmora-gold tracking-wide">
            Welcome to Velmora. Check your inbox for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-transparent border border-velmora-warm-gray/30 text-velmora-cream placeholder:text-velmora-warm-gray/60 font-sans text-sm px-5 py-3 focus:outline-none focus:border-velmora-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="w-full sm:w-auto font-sans text-xs font-semibold tracking-ultra-wide uppercase bg-velmora-gold text-velmora-charcoal px-8 py-3 hover:bg-velmora-gold-light transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
