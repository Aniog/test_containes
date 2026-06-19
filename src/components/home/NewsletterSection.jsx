import React, { useState } from 'react'
import { toast } from 'sonner'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      toast.success('Welcome to Velmora! Check your inbox for 10% off.')
      setEmail('')
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[var(--velmora-black)] text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[var(--velmora-gold)] mb-3 sm:mb-4">
          Join the Velmora Family
        </p>
        <h2 className="serif-heading text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 text-balance leading-tight">
          Get 10% Off Your First Order
        </h2>
        <p className="text-xs sm:text-sm text-white/60 mb-6 sm:mb-8">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[var(--velmora-gold)] transition-colors min-h-[44px]"
            required
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-gold whitespace-nowrap disabled:opacity-50 min-h-[44px]"
          >
            {isSubmitting ? 'Sending...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  )
}
