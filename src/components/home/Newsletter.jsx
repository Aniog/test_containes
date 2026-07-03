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
    <section className="bg-ink text-cream py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
          Join the List
        </p>
        <h2 className="font-serif text-3xl md:text-4xl mb-4">
          10% off your first order
        </h2>
        <p className="text-cream/70 mb-9 max-w-md mx-auto leading-relaxed">
          Be first to know about new collections, private sales, and styling
          notes. Plus, enjoy 10% off your first order.
        </p>

        <form
          onSubmit={onSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setStatus('idle')
            }}
            placeholder="Your email address"
            className="flex-1 bg-transparent border border-cream/30 px-5 py-4 text-sm text-cream placeholder:text-cream/50 outline-none focus:border-gold transition-colors"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="bg-gold text-ink text-[11px] uppercase tracking-[0.25em] px-7 py-4 hover:bg-gold-soft transition-colors duration-300 flex items-center justify-center gap-2"
          >
            Subscribe <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {status === 'success' && (
          <p className="text-gold-soft text-sm mt-4">
            Welcome to Velmora. Check your inbox for your 10% code.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-300 text-sm mt-4">
            Please enter a valid email address.
          </p>
        )}
        <p className="text-cream/40 text-xs mt-5">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
