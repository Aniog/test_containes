import React, { useState } from 'react'
import { toast } from 'sonner'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }
    toast.success('Welcome to Velmora! Check your inbox for 10% off.')
    setEmail('')
  }

  return (
    <section className="py-20 md:py-24 bg-charcoal-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs tracking-widest-xl uppercase text-gold-400 mb-4 font-sans">Join the Inner Circle</p>
        <h2 className="font-serif text-3xl md:text-4xl text-white font-light mb-4">
          10% Off Your First Order
        </h2>
        <p className="text-white/60 font-sans font-light mb-8">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm font-sans font-light focus:outline-none focus:border-gold-400 transition-colors"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-gold-500 text-charcoal-950 text-xs tracking-widest uppercase font-sans font-medium hover:bg-gold-400 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
