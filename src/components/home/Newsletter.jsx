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
    <section className="py-16 md:py-24 bg-velmora-charcoal">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs tracking-mega-wide uppercase text-velmora-gold-light mb-3">
          Stay in Touch
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-white/60 leading-relaxed mb-8 max-w-md mx-auto">
          Be the first to discover new arrivals, exclusive offers, and styling inspiration delivered to your inbox.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-xl text-velmora-gold-light mb-2">Welcome to Velmora</p>
            <p className="font-sans text-sm text-white/60">Check your inbox for your exclusive discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-5 py-3 text-sm font-sans focus:outline-none focus:border-velmora-gold-light transition-colors"
            />
            <button type="submit" className="btn-accent whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}

        <p className="font-sans text-[10px] text-white/30 mt-4 tracking-wider">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
