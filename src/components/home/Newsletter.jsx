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
    <section className="py-16 md:py-24 bg-gold-light">
      <div className="max-w-content mx-auto px-5 md:px-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-warm-900">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-3 text-warm-700 text-sm max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="mt-6 text-sm text-gold font-medium">Welcome to Velmora! Check your inbox for your code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 px-4 py-3 bg-white border border-warm-300 rounded text-sm text-warm-900 placeholder:text-warm-600 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-gold hover:bg-gold-hover text-white text-xs tracking-btn uppercase font-medium px-6 py-3 rounded transition-colors duration-200"
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
