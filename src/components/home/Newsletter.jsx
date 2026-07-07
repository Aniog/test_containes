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
    <section className="py-20 md:py-28 bg-blush-pale/30">
      <div className="max-w-2xl mx-auto px-5 text-center">
        <p className="text-xs tracking-widest uppercase text-gold mb-4">Join the Circle</p>
        <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wider uppercase text-truffle-800">
          10% Off Your First Order
        </h2>
        <p className="mt-3 text-truffle-500 text-sm">
          Subscribe for early access to new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="mt-8 text-gold-600 text-sm font-medium tracking-wide animate-fade-in">
            Thank you! Check your email for your welcome code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border-b border-truffle-300/50 px-3 py-3 text-sm text-truffle-800 placeholder-truffle-400 outline-none focus:border-gold transition-colors"
            />
            <button type="submit" className="btn-primary text-xs tracking-widest uppercase whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-truffle-400">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
