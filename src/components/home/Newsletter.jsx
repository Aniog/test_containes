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
    <section className="py-16 lg:py-24 bg-base">
      <div className="max-w-content mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-xs tracking-section uppercase font-semibold text-gold mb-3">Stay in Touch</h2>
        <p className="font-serif text-3xl md:text-4xl text-cream mb-3">Join for 10% Off</p>
        <p className="text-cream/60 text-sm max-w-md mx-auto mb-8">
          Subscribe to our newsletter for exclusive access to new collections, styling tips, and 10% off your first order.
        </p>

        {submitted ? (
          <div className="max-w-md mx-auto">
            <p className="text-gold font-serif text-lg">Welcome to Velmora</p>
            <p className="text-cream/60 text-sm mt-2">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border-b border-cream/30 focus:border-gold text-cream placeholder-cream/40 text-sm py-3 px-1 outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-gold hover:bg-gold-light text-cream font-medium text-sm tracking-wide uppercase px-6 py-3 transition-colors flex items-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter
