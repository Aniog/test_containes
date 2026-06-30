import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

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
      <div className="max-w-content mx-auto px-4 md:px-8 text-center">
        <h2 className="heading-serif text-3xl md:text-4xl text-cream font-light">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-stone-400 mt-3 mb-8 max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="font-sans text-sm text-gold">Welcome to Velmora. Check your inbox for your code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 px-5 py-3.5 bg-white/5 border border-stone-600 text-cream font-sans text-sm placeholder:text-stone-500 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="btn-primary flex items-center gap-2 whitespace-nowrap"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter
