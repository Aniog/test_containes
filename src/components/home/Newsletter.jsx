import React, { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section className="bg-velmora-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-velmora-gold">Insider Perks</p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl">Join for 10% Off Your First Order</h2>
        <p className="mx-auto mt-4 max-w-lg text-velmora-text-muted">
          Be the first to know about new arrivals, styling notes, and member-only offers.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="h-12 flex-1 max-w-md border border-velmora-border bg-velmora-ivory px-4 text-sm text-velmora-text-dark placeholder:text-velmora-text-muted focus:border-velmora-gold focus:outline-none"
          />
          <button
            type="submit"
            className="h-12 bg-velmora-charcoal px-8 text-xs font-semibold uppercase tracking-[0.12em] text-velmora-text-light transition-colors duration-300 hover:bg-velmora-gold hover:text-velmora-charcoal"
          >
            Subscribe
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm text-velmora-gold-dark">Thank you. Your discount code is on its way.</p>
        )}
      </div>
    </section>
  )
}
