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
    <section className="bg-espresso section-padding">
      <div className="container-narrow max-w-2xl text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream font-light mb-4">
          Join for 10% off your first order
        </h2>
        <p className="text-taupe/70 text-sm font-sans mb-8 leading-relaxed">
          Be the first to know about new collections, exclusive offers, and styling inspiration — delivered to your inbox.
        </p>

        {submitted ? (
          <p className="text-gold font-serif text-lg italic">
            Thank you — check your inbox for your welcome code.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-taupe/40 text-cream px-5 py-3 rounded-sm text-sm font-sans placeholder:text-taupe/40 focus:outline-none focus:border-gold transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Get 10% Off
            </button>
          </form>
        )}
      </div>
    </section>
  )
}