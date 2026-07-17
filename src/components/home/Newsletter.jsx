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
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[#1A1A1A]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white">Join the Velmora World</h2>
        <p className="mt-4 font-sans text-sm text-white/60">
          Subscribe for early access, styling tips, and 10% off your first order.
        </p>

        {submitted ? (
          <p className="mt-8 font-sans text-sm text-gold">
            Thank you! Check your inbox for your welcome gift.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 font-sans text-sm focus:outline-none focus:border-gold transition-colors rounded-none"
            />
            <button
              type="submit"
              className="px-6 py-3 btn-gold font-sans text-sm uppercase tracking-widest transition-colors border-none rounded-none"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
