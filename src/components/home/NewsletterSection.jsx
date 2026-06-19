import React, { useState } from 'react'

export default function NewsletterSection() {
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
    <section className="py-16 md:py-20 bg-[hsl(var(--accent))] text-white">
      <div className="container-padding text-center max-w-xl mx-auto">
        <h2 className="serif-heading text-3xl md:text-4xl tracking-[0.15em] mb-4">
          Join for 10% Off
        </h2>
        <p className="text-sm opacity-90 mb-8 leading-relaxed">
          Subscribe to receive exclusive offers, early access to new collections, and styling tips.
        </p>

        {submitted ? (
          <div className="bg-white/20 rounded-sm p-6">
            <p className="serif-heading text-lg tracking-[0.1em]">Welcome to Velmora</p>
            <p className="text-sm opacity-90 mt-2">Check your inbox for your 10% off code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-sm text-white placeholder-white/60 focus:outline-none focus:border-white/60 text-sm"
              required
            />
            <button
              type="submit"
              className="bg-white text-[hsl(var(--accent))] uppercase tracking-wider text-sm font-medium px-8 py-3 rounded-sm hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
