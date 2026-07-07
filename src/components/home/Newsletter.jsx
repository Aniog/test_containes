import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section className="py-20 md:py-24 bg-velmora-base">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-velmora-gold text-xs tracking-super-wide uppercase mb-4">Join the Family</p>
        <h2 className="font-serif text-4xl md:text-5xl text-velmora-cream mb-4">
          10% Off Your First Order
        </h2>
        <p className="text-velmora-taupe mb-10">
          Subscribe for exclusive access to new collections, styling tips, and member-only offers.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-velmora-surface border border-velmora-surface text-velmora-cream placeholder-velmora-taupe text-sm focus:outline-none focus:border-velmora-gold transition-colors"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-velmora-gold text-velmora-base text-xs tracking-super-wide uppercase hover:bg-velmora-gold-light transition-colors"
          >
            {status === 'success' ? 'Welcome!' : 'Subscribe'}
          </button>
        </form>

        {status === 'success' && (
          <p className="text-velmora-gold text-sm mt-4 animate-fade-in">
            Welcome to Velmora! Check your inbox for your discount code.
          </p>
        )}

        <p className="text-velmora-taupe/60 text-xs mt-6">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
