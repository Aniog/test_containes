import React, { useState } from 'react'
import { toast } from 'sonner'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }
    setSubmitted(true)
    toast.success('Welcome to Velmora! Check your inbox for 10% off.')
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-16 sm:py-20 bg-[var(--velmora-dark)] text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="velmora-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
          Join for 10% Off
        </h2>
        <p className="text-white/60 text-sm mb-8 max-w-md mx-auto">
          Subscribe to receive exclusive offers, early access to new collections, and styling tips.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[var(--velmora-accent)] transition-colors"
            required
          />
          <button
            type="submit"
            className="velmora-btn-accent px-6 py-3 whitespace-nowrap"
            disabled={submitted}
          >
            {submitted ? 'Subscribed!' : 'Subscribe'}
          </button>
        </form>

        <p className="text-white/40 text-xs mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
