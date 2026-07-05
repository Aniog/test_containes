import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="py-16 md:py-24 bg-brand-text">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-brand-goldLight mb-3">Stay in the loop</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Join for 10% off your first order</h2>
          <p className="text-white/70 mb-8">Be the first to know about new collections, exclusive offers, and styling inspiration.</p>

          {submitted ? (
            <p className="text-brand-goldLight font-serif text-lg">Thank you for subscribing!</p>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-brand-goldLight focus:ring-brand-goldLight/20"
              />
              <Button type="submit" className="whitespace-nowrap">Subscribe</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}