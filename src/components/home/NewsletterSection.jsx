import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="bg-gold-600 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-100">Join the List</p>
        <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
          10% off your first order
        </h2>
        <p className="mt-3 text-sm text-gold-100/90">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {status === 'success' ? (
          <p className="mt-8 text-lg font-serif text-white">Thank you. Check your inbox for your code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 border-gold-500 bg-white/10 px-4 text-white placeholder:text-gold-200 focus-visible:ring-gold-200 sm:w-80"
            />
            <Button type="submit" className="h-12 px-8 bg-espresso-900 text-white hover:bg-espresso-800 uppercase tracking-wider text-xs">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
