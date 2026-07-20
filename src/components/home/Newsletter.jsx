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
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="max-w-2xl mx-auto text-center px-6">
        <h2 className="serif-heading text-3xl md:text-5xl mb-4">Join for 10% Off</h2>
        <p className="text-white/70 mb-8 text-sm md:text-base">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="serif-heading text-2xl text-accent">Welcome to Velmora</p>
            <p className="text-white/60 text-sm mt-2">Check your inbox for your welcome discount.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-white/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-accent text-accent-foreground px-8 py-3 text-xs tracking-widest uppercase hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
