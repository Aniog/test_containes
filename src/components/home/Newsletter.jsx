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
    <section className="py-16 md:py-20 bg-velmora-black">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="font-sans text-xs tracking-widest-3xl uppercase text-velmora-gold mb-3">
          Stay in Touch
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream mb-3">
          Join for 10% Off
        </h2>
        <p className="font-sans text-sm text-velmora-silver mb-8">
          Subscribe to our newsletter for exclusive offers, new arrivals, and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-lg text-velmora-gold mb-2">Thank you!</p>
            <p className="font-sans text-sm text-velmora-silver">
              Check your inbox for your welcome discount.
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
              className="flex-1 px-5 py-3.5 bg-velmora-charcoal border border-velmora-dark text-velmora-cream text-sm font-sans placeholder:text-velmora-silver focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-velmora-gold text-white text-xs font-sans font-semibold tracking-widest-xl uppercase hover:bg-velmora-gold-dark transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="font-sans text-[11px] text-velmora-slate mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
