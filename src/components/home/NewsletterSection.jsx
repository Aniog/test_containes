import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function NewsletterSection() {
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
    <section className="py-20 md:py-28 bg-ink-900">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="text-gold-400 text-xs tracking-widest uppercase font-sans mb-3">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream-50 font-light leading-tight mb-4">
          Get 10% Off Your First Order
        </h2>
        <p className="text-cream-50/50 text-sm font-sans leading-relaxed mb-8 max-w-sm mx-auto">
          Be the first to know about new collections, exclusive drops, and members-only pricing.
        </p>

        {submitted ? (
          <p className="text-gold-400 text-sm font-sans">Thank you! Check your inbox for your 10% off code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-ink-800 border border-ink-700 text-cream-50 placeholder:text-cream-50/30 text-sm font-sans rounded-sm focus:outline-none focus:border-gold-500/50 transition-colors"
            />
            <button
              type="submit"
              className="btn-accent text-xs whitespace-nowrap inline-flex items-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
        <p className="text-cream-50/30 text-xs mt-4 font-sans">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}