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
    <section className="py-16 md:py-24 bg-brand-deep">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-cream">
          Join for 10% Off
        </h2>
        <div className="w-12 h-px bg-brand-gold mx-auto mt-4 mb-4" />
        <p className="text-sm text-brand-pale-gray font-sans mb-8">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-serif text-lg text-brand-gold">Welcome to Velmora</p>
            <p className="text-sm text-brand-pale-gray font-sans mt-2">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-brand-pale-gray text-brand-cream px-4 py-3 text-sm font-sans placeholder:text-brand-light-gray focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-brand-gold text-white px-8 py-3 text-xs tracking-super-wide uppercase font-sans font-medium hover:bg-brand-gold-dark transition-colors duration-300"
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
