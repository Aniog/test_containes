import React, { useState } from 'react'
import { Mail } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('submitting')
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1000)
  }

  return (
    <section className="py-16 md:py-20 bg-[var(--velmora-dark)] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-8 h-8 text-[var(--velmora-accent-light)] mx-auto mb-4" />
        <h2 className="velmora-heading text-3xl md:text-4xl mb-3">Join the Velmora Circle</h2>
        <p className="text-white/70 mb-8">
          Subscribe for exclusive access to new collections, styling tips, and <span className="text-[var(--velmora-accent-light)]">10% off your first order</span>.
        </p>

        {status === 'success' ? (
          <div className="bg-white/10 rounded-lg p-6">
            <p className="velmora-heading text-xl text-[var(--velmora-accent-light)]">Welcome to Velmora!</p>
            <p className="text-white/70 mt-2 text-sm">Check your inbox for your welcome discount.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setStatus('idle')
              }}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[var(--velmora-accent-light)] transition-colors"
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="velmora-btn-accent whitespace-nowrap"
            >
              {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-red-400 text-sm mt-3">Please enter a valid email address.</p>
        )}

        <p className="text-xs text-white/40 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
