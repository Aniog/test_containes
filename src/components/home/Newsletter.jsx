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
    <section className="py-16 md:py-20 bg-velmora-900">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="serif-heading text-3xl md:text-4xl text-white font-semibold">
            Join for 10% Off
          </h2>
          <p className="text-sm text-velmora-400 mt-3 leading-relaxed">
            Be the first to know about new collections, exclusive drops, and behind-the-scenes stories.
            Plus, enjoy 10% off your first order.
          </p>

          {submitted ? (
            <p className="text-gold-400 mt-6 text-sm">Thank you! Check your inbox for your welcome code.</p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-velmora-800 border border-velmora-700 text-white text-sm placeholder:text-velmora-500 focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gold-500 text-white text-xs tracking-[0.12em] uppercase font-medium hover:bg-gold-600 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}