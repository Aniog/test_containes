import React, { useState } from 'react'
import { toast } from 'sonner'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }
    toast.success('Welcome to Velmora! Check your inbox for 10% off.')
    setEmail('')
  }

  return (
    <section className="py-16 md:py-20 bg-[var(--velmora-accent)]">
      <div className="velmora-container-narrow px-4 md:px-8 text-center">
        <h2 className="velmora-heading-md text-white mb-3">
          Join for 10% Off Your First Order
        </h2>
        <p className="velmora-body text-white/80 mb-8 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-white/10 border border-white/30 text-white placeholder-white/60 rounded-sm focus:outline-none focus:border-white/60 transition-colors"
            required
          />
          <button
            type="submit"
            className="velmora-btn bg-white text-[var(--velmora-accent)] hover:bg-white/90 px-8"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
