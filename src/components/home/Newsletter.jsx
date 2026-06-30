import React, { useState } from 'react'
import Button from '@/components/ui/Button'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section className="py-20 md:py-28 bg-espresso-800">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-medium tracking-ultra-wide text-gold mb-4 block">
          JOIN THE VELMORA FAMILY
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-cream-50 mb-4">
          Get 10% Off Your First Order
        </h2>
        <p className="text-cream-100/70 mb-8">
          Subscribe to receive exclusive offers, early access to new collections, 
          and styling inspiration delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 bg-transparent border border-cream-100/30 rounded text-cream-50 placeholder:text-cream-100/50 focus:outline-none focus:border-gold transition-colors"
          />
          <Button type="submit" variant="gold" size="md">
            Subscribe
          </Button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm text-gold animate-fade-in">
            Welcome to Velmora! Check your inbox for your 10% off code.
          </p>
        )}

        <p className="mt-6 text-xs text-cream-100/40">
          By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
