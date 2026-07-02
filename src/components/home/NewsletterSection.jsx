import React, { useState } from 'react'
import { toast } from 'sonner'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }
    setSubmitted(true)
    toast.success('Welcome to Velmora! Check your inbox for 10% off.')
    setEmail('')
  }

  return (
    <section className="bg-charcoal-950 py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-50 tracking-wide">
          Join for 10% Off
        </h2>
        <p className="mt-4 text-sm text-velmora-300">
          Your first order, on us. Plus early access to new collections and exclusive offers.
        </p>
        {submitted ? (
          <p className="mt-8 text-gold-400 font-serif text-lg">
            Welcome to the Velmora family
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-velmora-950/50 border border-velmora-700 text-velmora-50 placeholder-velmora-400 text-sm focus:outline-none focus:border-gold-500 transition-colors"
              required
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
