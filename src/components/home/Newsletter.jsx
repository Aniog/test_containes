import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | success | error

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="py-20 md:py-28 bg-ink text-cream">
      <div className="container-velmora">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow mb-4">Join Velmora</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight">
            10% Off Your First Order
          </h2>
          <p className="mt-4 text-cream/70">
            Be the first to know about new collections, private sales, and
            styling notes. Enjoy 10% off when you join.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setStatus('idle')
              }}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-cream/30 text-cream placeholder:text-cream/50 px-5 py-3.5 text-sm outline-none focus:border-gold transition-colors"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="btn-accent whitespace-nowrap"
            >
              Subscribe <ArrowRight size={14} className="ml-1" />
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-sm text-gold">
              Welcome to Velmora. Check your inbox for your 10% code.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-sm text-red-300">
              Please enter a valid email address.
            </p>
          )}
          <p className="mt-4 text-xs text-cream/50">
            By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
