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
    <section className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <p className="font-sans text-[10px] tracking-widest uppercase text-taupe mb-4">
          The Velmora Edit
        </p>
        <h2 className="font-serif text-3xl lg:text-4xl font-light tracking-wide text-charcoal">
          Join for 10% off your first order
        </h2>
        <p className="text-sm text-taupe mt-4 max-w-md mx-auto">
          Sign up for early access to new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="mt-8 text-sm text-espresso font-serif italic">
            Thank you. Your 10% code is on its way to your inbox.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-white border border-border px-5 py-3.5 text-sm font-sans text-charcoal placeholder:text-taupe/60 focus:outline-none focus:border-gold/50 transition-colors"
            />
            <button
              type="submit"
              className="bg-charcoal text-cream px-8 py-3.5 font-sans text-xs tracking-wider uppercase hover:bg-espresso transition-colors duration-300"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </section>
  )
}