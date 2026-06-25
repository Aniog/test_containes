import React, { useState } from 'react'
import { Mail } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setDone(true)
    setEmail('')
  }

  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-5 text-center md:px-8">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Join Velmora</p>
        <h2 className="mt-4 font-serif text-4xl text-ivory md:text-5xl">
          10% off your first order
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-ivory/70">
          Be first to know about new collections, private sales and styling
          notes. Plus, enjoy 10% off your first order.
        </p>

        {done ? (
          <p className="mt-8 font-serif text-xl italic text-gold">
            Welcome to Velmora. Check your inbox.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Mail
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-ivory/50"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full border border-ivory/30 bg-transparent py-3.5 pl-11 pr-4 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-gold px-8 py-3.5 text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-gold-deep hover:text-ivory"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="mt-4 text-[10px] uppercase tracking-[0.15em] text-ivory/40">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}

export default Newsletter
