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
    <section className="py-16 md:py-24 bg-warm-black">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl tracking-ultra-wide uppercase text-text-light">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-sm text-text-light/60">
          Subscribe to receive 10% off your first order, plus early access to new collections and exclusive offers.
        </p>
        <div className="w-12 h-px bg-muted-gold mx-auto mt-6 mb-8" />

        {submitted ? (
          <p className="font-serif text-lg text-muted-gold italic">Welcome to Velmora. Check your inbox for your code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-warm-charcoal/40 text-text-light px-4 py-3 text-sm placeholder:text-text-light/30 focus:outline-none focus:border-muted-gold transition-colors"
            />
            <button
              type="submit"
              className="btn-premium bg-muted-gold text-warm-black px-8 py-3 text-xs font-medium uppercase tracking-ultra-wide hover:bg-bright-gold transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
