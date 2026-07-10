import React, { useState } from 'react'

const Newsletter = () => {
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
    <section className="py-16 md:py-24 bg-base">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl tracking-ultra-wide uppercase text-cream font-light mb-3">
          Join for 10% Off
        </h2>
        <p className="text-sm text-stone-400 font-sans mb-8">
          Subscribe to receive 10% off your first order, plus early access to new collections and exclusive offers.
        </p>
        {submitted ? (
          <p className="text-gold font-sans text-sm tracking-wide">
            Welcome to Velmora! Check your inbox for your 10% discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-stone-600 text-cream placeholder-stone-500 text-sm font-sans px-4 py-3 tracking-wide focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold hover:bg-gold-hover text-white text-xs tracking-ultra-wide uppercase font-sans font-semibold px-8 py-3 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter
