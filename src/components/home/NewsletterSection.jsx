import React, { useState } from 'react'
import { toast } from 'sonner'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800))
    toast.success('Welcome to Velmora! Check your inbox for 10% off.')
    setEmail('')
    setIsSubmitting(false)
  }

  return (
    <section className="py-16 md:py-20 bg-[var(--velmora-text)] text-[var(--velmora-bg)]">
      <div className="velmora-container mx-auto px-4 md:px-8 text-center max-w-2xl">
        <p className="velmora-body-xs text-[var(--velmora-text-light)] tracking-[0.2em] mb-3">
          Stay Connected
        </p>
        <h2 className="velmora-heading velmora-heading-md mb-4 text-white">
          Join for 10% Off Your First Order
        </h2>
        <p className="velmora-body text-[var(--velmora-text-light)] mb-8">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 velmora-input bg-white/10 border-white/20 text-white placeholder:text-[var(--velmora-text-light)] focus:border-[var(--velmora-accent)]"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="velmora-btn velmora-btn-accent whitespace-nowrap"
          >
            {isSubmitting ? 'Joining...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  )
}
