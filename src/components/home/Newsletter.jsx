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
    <section className="py-16 md:py-24 bg-charcoal">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-gold-light text-xs uppercase tracking-[0.2em] font-medium mb-3">
          Join the Inner Circle
        </p>
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-white">
          Receive 10% Off Your First Order
        </h2>
        <p className="text-white/60 text-sm mt-3 max-w-md mx-auto">
          Be the first to know about new collections, exclusive launches, and member-only offers.
        </p>

        {submitted ? (
          <div className="mt-8 p-4 border border-gold/30 rounded-sm">
            <p className="text-gold-light text-sm">Thank you! Check your inbox for your welcome discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm rounded-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gold text-white text-xs uppercase tracking-[0.15em] font-medium hover:bg-gold-dark transition-colors rounded-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}