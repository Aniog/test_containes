import React, { useState } from 'react'
import { toast } from 'sonner'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setEmail('')
      toast.success('Welcome! Check your inbox for your 10% off code.')
    }, 800)
  }

  return (
    <section className="py-16 md:py-20 bg-base">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <p className="font-sans text-xs font-medium tracking-widest-3xl uppercase text-gold mb-3">
          Stay in touch
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream font-light mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-cream/60 leading-relaxed mb-8 max-w-md mx-auto">
          Be the first to discover new arrivals, exclusive offers, 
          and styling inspiration from Velmora.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-5 py-3.5 bg-base-light border border-cream/15 text-cream text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold/50 transition-colors"
            required
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="px-8 py-3.5 bg-gold text-base text-xs font-medium tracking-widest-xl uppercase hover:bg-gold-dark transition-colors disabled:opacity-60 whitespace-nowrap"
          >
            {status === 'submitting' ? 'Joining...' : 'Subscribe'}
          </button>
        </form>

        <p className="text-2xs text-cream/30 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
