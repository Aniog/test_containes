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
    <section className="py-20 md:py-32 bg-warm-black">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-warm-white text-3xl md:text-4xl font-light uppercase tracking-[0.15em]">
          Join for 10% Off
        </h2>
        <p className="mt-4 text-soft-white text-sm tracking-wider">
          Subscribe to receive 10% off your first order, plus early access to new collections and exclusive offers.
        </p>
        <div className="w-12 h-px bg-muted-gold mx-auto mt-6 mb-8" />

        {submitted ? (
          <p className="text-muted-gold text-sm tracking-wider">
            Welcome to Velmora. Check your inbox for your 10% code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-warm-charcoal text-warm-white px-4 py-3 text-sm tracking-wider placeholder:text-warm-gray focus:outline-none focus:border-muted-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-muted-gold text-warm-black px-8 py-3 text-xs uppercase tracking-[0.25em] font-medium hover:bg-bright-gold transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
