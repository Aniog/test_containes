import { useState } from 'react'
import { useToast } from '@/context/ToastContext'

export default function Newsletter() {
  const { toast } = useToast()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
    toast('Welcome to Velmora — check your inbox for 10% off')
    setEmail('')
  }

  return (
    <section className="bg-champagne">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-8 md:py-24">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold-deep">Join Velmora</p>
        <h2 className="mt-4 font-serif text-4xl text-ink md:text-5xl">
          10% off your first order
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-taupe">
          Be the first to know about new collections, private sales, and styling
          notes. Plus, enjoy 10% off your first order.
        </p>

        <form onSubmit={onSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (status !== 'idle') setStatus('idle')
            }}
            placeholder="Your email address"
            aria-label="Email address"
            className="flex-1 border border-sand bg-ivory px-5 py-4 text-sm text-ink placeholder:text-taupe/70 focus:border-gold focus:outline-none"
          />
          <button
            type="submit"
            className="bg-espresso px-8 py-4 text-xs uppercase tracking-widest3 text-ivory transition-colors hover:bg-ink"
          >
            Subscribe
          </button>
        </form>
        {status === 'error' && (
          <p className="mt-3 text-xs text-gold-deep">Please enter a valid email address.</p>
        )}
        {status === 'success' && (
          <p className="mt-3 text-xs text-ink">Thank you — your code is on its way.</p>
        )}
        <p className="mt-4 text-[11px] uppercase tracking-widest2 text-taupe/70">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
