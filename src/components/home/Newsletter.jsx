import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section className="bg-velmora py-20 lg:py-24">
      <div className="max-w-xl mx-auto px-6 text-center">
        <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-velmora-gold font-medium mb-3">
          Join the Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-white font-light tracking-wide mb-4">
          10% off your first order
        </h2>
        <p className="text-white/50 text-sm mb-8">
          Sign up for early access to new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="text-velmora-gold text-sm font-medium">
            Thank you! Check your inbox for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-white/30 text-white placeholder:text-white/40 px-5 py-3.5 text-sm focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button type="submit" className="btn-primary bg-velmora-gold border-velmora-gold text-velmora hover:bg-white hover:border-white transition-all">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
