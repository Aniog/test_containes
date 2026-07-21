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
    <section className="py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs tracking-[0.25em] uppercase text-velmora-gold font-medium">
          Join the List
        </span>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl font-light text-velmora-charcoal">
          Get 10% Off Your First Order
        </h2>
        <p className="mt-3 text-sm text-velmora-stone max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive offers, and styling tips.
        </p>

        {submitted ? (
          <div className="mt-8 p-4 bg-velmora-gold/10 border border-velmora-gold/30 rounded-sm">
            <p className="text-sm text-velmora-charcoal font-medium">
              Welcome to the Velmora family. Check your inbox for your 10% code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-velmora-ivory border border-velmora-border text-sm text-velmora-charcoal placeholder:text-velmora-stone/60 focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-velmora-gold text-white text-xs tracking-[0.15em] uppercase font-medium hover:bg-velmora-gold-dark transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="mt-4 text-[11px] text-velmora-stone/60">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
