import React, { useState } from 'react'
import { Send } from 'lucide-react'

export default function Newsletter() {
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
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 rounded-sm px-6 py-12 md:px-16 md:py-16 text-center">
          <p className="section-subheading text-gold-400 mb-3">Stay in Touch</p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream-50 tracking-wide mb-4">
            Join for 10% Off Your First Order
          </h2>
          <p className="font-sans text-sm text-stone-400 max-w-md mx-auto mb-8">
            Be the first to discover new arrivals, exclusive offers, and styling tips. Unsubscribe anytime.
          </p>

          {submitted ? (
            <div className="animate-fade-in">
              <p className="font-serif text-xl text-gold-400">Welcome to Velmora</p>
              <p className="font-sans text-sm text-stone-400 mt-2">Check your inbox for your exclusive discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3 bg-stone-800 border border-stone-700 text-cream-50 font-sans text-sm placeholder:text-stone-500 focus:outline-none focus:border-gold-500 transition-colors rounded-sm"
              />
              <button
                type="submit"
                className="btn-primary flex items-center justify-center gap-2 rounded-sm"
              >
                <Send className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
