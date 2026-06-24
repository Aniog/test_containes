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
    <section className="bg-brand-charcoal py-16 md:py-24">
      <div className="section-padding text-center max-w-xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide">
          Join for 10% Off
        </h2>
        <p className="text-white/60 mt-3 text-sm leading-relaxed">
          Subscribe to receive exclusive access to new collections, styling tips, and 10% off your first order.
        </p>

        {submitted ? (
          <p className="mt-8 text-brand-gold font-serif text-lg">Welcome to Velmora. Check your inbox.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm tracking-wide focus:outline-none focus:border-brand-gold transition-colors rounded-none"
            />
            <button type="submit" className="btn-accent whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter
