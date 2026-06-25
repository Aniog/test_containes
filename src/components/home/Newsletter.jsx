import React, { useState } from 'react'
import { Input } from '@/components/ui/input'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('submitting')
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 800)
  }

  return (
    <section className="py-16 md:py-24 bg-accent">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/80 font-medium mb-3">
          Exclusive Access
        </p>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white tracking-wide mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-white/80 text-sm mb-8 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>

        {status === 'success' ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-sm py-4 px-6">
            <p className="text-white text-sm font-medium">
              Welcome to Velmora! Check your inbox for your discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 bg-white border-0 text-espresso placeholder:text-stone-400 rounded-sm flex-1"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="h-12 px-8 bg-espresso text-white text-xs uppercase tracking-[0.2em] font-medium rounded-sm hover:bg-espresso/90 transition-colors disabled:opacity-70"
            >
              {status === 'submitting' ? 'Joining...' : 'Join'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
