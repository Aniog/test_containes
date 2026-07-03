import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | success | error

  const onSubmit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28 md:px-8">
        <p className="text-[11px] uppercase tracking-widest2 text-gold-soft">Join Velmora</p>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl">
          10% off your first order
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream/70">
          Be the first to know about new collections, private sales, and styling notes.
          Enjoy 10% off when you subscribe.
        </p>

        <form onSubmit={onSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setStatus('idle')
            }}
            placeholder="Your email address"
            className="flex-1 border border-cream/30 bg-transparent px-5 py-3.5 text-sm text-cream placeholder:text-cream/40 focus:border-gold-soft focus:outline-none"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-gold px-7 py-3.5 text-xs uppercase tracking-wide2 text-cream transition-colors hover:bg-gold-deep"
          >
            Subscribe <ArrowRight size={14} />
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm text-gold-soft">
            Welcome to Velmora. Check your inbox for your 10% code.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-sm text-red-300">Please enter a valid email address.</p>
        )}

        <p className="mt-4 text-[11px] text-cream/40">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
