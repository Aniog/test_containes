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
    <section className="py-16 lg:py-20 bg-onyx-950">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-400 mb-3">
          Newsletter
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-ivory-100 mb-4">
          Join for 10% off
        </h2>
        <p className="font-sans text-sm text-velvet-400 mb-8 max-w-md mx-auto">
          Subscribe to receive exclusive offers, early access to new collections, and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-lg text-gold-400 mb-2">Welcome to Velmora</p>
            <p className="font-sans text-sm text-velvet-400">
              Check your inbox for your exclusive discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-onyx-900 border border-velvet-700 px-4 py-3 text-sm text-ivory-100 placeholder:text-velvet-600 focus:outline-none focus:border-gold-500 transition-colors font-sans"
            />
            <button type="submit" className="btn-gold py-3">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
