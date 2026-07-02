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
    <section className="py-16 md:py-20 bg-accent-soft">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Stay Connected</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-muted text-sm mb-8">
          Be the first to know about new arrivals, exclusive offers, and styling tips.
        </p>

        {submitted ? (
          <p className="text-accent font-medium text-sm">
            Thank you for subscribing! Check your inbox for your welcome discount.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3.5 bg-white border border-border text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="bg-accent text-white px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-accent-dark transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
