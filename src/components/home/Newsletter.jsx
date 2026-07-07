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
    <section className="bg-charcoal py-16 md:py-20">
      <div className="max-w-8xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl tracking-[0.1em] uppercase text-white">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-stone-400 text-sm max-w-md mx-auto">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections.
        </p>

        {submitted ? (
          <p className="mt-8 text-champagne font-serif text-lg">
            Welcome to Velmora. Check your inbox for your code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-white/10 border border-stone-600 text-white placeholder-stone-500 px-5 py-3 text-sm tracking-wide focus:outline-none focus:border-champagne transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-champagne text-white px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium hover:bg-champagne-dark transition-colors duration-300"
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
