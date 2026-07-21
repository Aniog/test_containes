import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gold/10">
      <div className="max-w-content mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-sans text-xs font-semibold tracking-section uppercase text-gold mb-3">
          Stay in Touch
        </h2>
        <p className="font-serif text-3xl md:text-4xl font-medium text-base mb-3">
          Join for 10% Off Your First Order
        </p>
        <p className="font-sans text-sm text-muted max-w-md mx-auto mb-8">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="max-w-md mx-auto">
            <p className="font-serif text-lg text-base">Welcome to Velmora. Check your inbox for your code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 bg-card border border-border text-sm font-sans text-base placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-base px-5 py-3.5 hover:bg-gold-dark transition-colors duration-300"
              aria-label="Subscribe"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter
