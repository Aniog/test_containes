import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!email.trim()) {
      setError('Please enter your email.')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email.')
      return
    }
    setDone(true)
  }

  return (
    <section className="bg-champagne">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <p className="text-[11px] uppercase tracking-widest2 text-gold-deep">Join Velmora</p>
        <h2 className="mt-4 font-serif text-4xl text-ink md:text-5xl">
          10% off your first order
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink/70">
          Be the first to know about new collections, private sales, and styling
          notes. Enjoy 10% off your first order when you join.
        </p>

        {done ? (
          <p className="mt-8 font-serif text-2xl italic text-ink">
            Welcome to Velmora. Check your inbox.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 border border-ink/30 bg-cream/60 px-5 py-3 text-sm text-ink placeholder:text-stone focus:border-gold focus:outline-none"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-ink px-8 py-3 text-[11px] uppercase tracking-widest2 text-cream transition-colors hover:bg-ink/90"
            >
              Subscribe <ArrowRight width={14} height={14} />
            </button>
          </form>
        )}
        {error && <p className="mt-3 text-xs text-gold-deep">{error}</p>}
        <p className="mt-4 text-[10px] uppercase tracking-widest2 text-ink/50">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
