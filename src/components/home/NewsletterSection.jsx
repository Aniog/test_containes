import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { toast } from 'sonner'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address.')
      return
    }
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      toast.success('Welcome! Check your inbox for 10% off.')
      setEmail('')
    }, 800)
  }

  return (
    <section className="py-16 md:py-24 bg-velmora-gold">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white">
          Join the Inner Circle
        </h2>
        <p className="mt-3 text-white/90 text-sm md:text-base">
          Subscribe for early access to new collections, styling tips, and{' '}
          <span className="font-medium">10% off your first order</span>.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-white/10 border border-white/30 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm"
          />
          <Button
            type="submit"
            variant="dark"
            className="shrink-0"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
          </Button>
        </form>
        <p className="mt-3 text-[11px] text-white/60">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
