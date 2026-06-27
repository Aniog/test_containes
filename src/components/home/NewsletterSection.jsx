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
    <section className="py-20 md:py-28 bg-charcoal text-ivory">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Join the Family</p>
        <h2 className="font-serif text-3xl md:text-4xl mb-4">10% Off Your First Order</h2>
        <p className="text-ivory/60 mb-8 leading-relaxed">
          Subscribe for exclusive access to new collections, styling tips, and members-only offers.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-xl text-gold mb-2">Welcome to Velmora</p>
            <p className="text-ivory/60 text-sm">Check your inbox for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-transparent border border-ivory/20 text-ivory placeholder:text-ivory/40 text-sm focus:outline-none focus:border-gold transition-colors"
              required
            />
            <button type="submit" className="btn-gold whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
