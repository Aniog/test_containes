import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section className="bg-gold py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl text-cream-50 md:text-4xl">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-3 text-sm text-cream-100">
          Be the first to see new arrivals, private sales, and styling notes from the atelier.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 border-b-2 border-cream-50/40 bg-transparent px-4 py-3 font-sans text-sm text-cream-50 placeholder:text-cream-100/70 focus:border-cream-50 focus:outline-none"
          />
          <Button
            type="submit"
            variant="outline"
            size="md"
            className="border-cream-50 text-cream-50 hover:bg-cream-50 hover:text-gold"
          >
            Subscribe
          </Button>
        </form>
        {status === 'success' && (
          <p className="mt-4 text-xs uppercase tracking-wide text-cream-50">
            Welcome to Velmora — your code is on its way.
          </p>
        )}
      </div>
    </section>
  )
}
