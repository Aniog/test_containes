import React, { useState } from 'react'
import { toast } from 'sonner'

const Newsletter = () => {
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
    await new Promise(resolve => setTimeout(resolve, 1000))
    toast.success('Welcome to Velmora! Check your inbox for 10% off.')
    setEmail('')
    setIsSubmitting(false)
  }

  return (
    <section className="newsletter-section py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream mb-3">
          Join the Inner Circle
        </h2>
        <div className="hairline w-24 mx-auto mb-4" style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.5), transparent)' }} />
        <p className="font-sans text-sm text-velmora-cream/70 mb-8 max-w-md mx-auto">
          Subscribe for exclusive access to new collections, styling tips, and 10% off your first order.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-velmora-cream/10 border border-velmora-cream/20 px-4 py-3 font-sans text-sm text-velmora-cream placeholder:text-velmora-cream/40 focus:outline-none focus:border-velmora-gold transition-colors"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-velmora-gold text-velmora-base font-sans text-xs tracking-wide-luxury uppercase px-8 py-3 transition-all duration-300 hover:bg-velmora-gold-light disabled:opacity-50"
          >
            {isSubmitting ? 'Joining...' : 'Join'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
