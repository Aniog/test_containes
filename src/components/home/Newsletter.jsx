import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="py-16 md:py-20 bg-warm-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-2xl md:text-4xl tracking-wide text-text-light">
          Join for 10% Off
        </h2>
        <p className="mt-3 font-sans text-sm text-text-muted font-light max-w-md mx-auto">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-lg text-gold tracking-wide">
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
              className="w-full sm:flex-1 bg-transparent border-b border-sand text-text-light placeholder:text-text-muted font-sans text-sm py-3 px-1 focus:outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="font-sans text-xs tracking-super-wide uppercase bg-gold text-warm-black px-8 py-3 hover:bg-gold-light transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
