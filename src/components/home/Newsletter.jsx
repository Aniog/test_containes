import React, { useState } from 'react'
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
      <div className="container-velmora py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest2 text-champagne mb-4">
            Join the List
          </p>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-cream leading-tight">
            10% off your first order
          </h2>
          <p className="mt-5 text-cream/70 leading-relaxed">
            Be first to know about new collections, private sales, and styling
            notes. Enjoy 10% off your first piece when you subscribe.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-9 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status !== 'idle') setStatus('idle')
              }}
              placeholder="Your email address"
              aria-label="Email address"
              className="flex-1 bg-transparent border border-cream/30 text-cream placeholder:text-cream/45 px-5 py-3.5 text-sm outline-none focus:border-champagne transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-champagne text-ink text-xs uppercase tracking-widest2 px-7 py-3.5 hover:bg-champagne-deep transition-colors duration-300"
            >
              Subscribe <ArrowRight size={14} />
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-sm text-champagne">
              Welcome to Velmora. Check your inbox for your 10% code.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-sm text-red-300">
              Please enter a valid email address.
            </p>
          )}

          <p className="mt-5 text-[11px] text-cream/45">
            By subscribing you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
