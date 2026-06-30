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
    <section className="py-16 md:py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-white">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-3 text-warm-400 text-sm max-w-md mx-auto">
          Subscribe to our newsletter for exclusive access to new collections, styling tips, and special offers.
        </p>

        {submitted ? (
          <div className="mt-8">
            <p className="text-gold font-serif text-lg">Welcome to Velmora</p>
            <p className="text-warm-400 text-sm mt-2">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-white/10 border border-white/20 text-white placeholder-warm-500 text-sm px-5 py-3 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-gold text-charcoal text-xs tracking-wide-2 uppercase font-semibold px-8 py-3 hover:bg-gold-light transition-colors duration-300"
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
