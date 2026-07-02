import React, { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="py-16 md:py-24 bg-[var(--velmora-dark)] text-[var(--velmora-bg)]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs tracking-wider-luxury uppercase text-[var(--velmora-accent)] mb-4">
          Join the Velmora Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl mb-4">
          10% Off Your First Order
        </h2>
        <p className="text-sm text-[var(--velmora-text-muted)] mb-8">
          Subscribe for exclusive access to new collections, styling tips, and member-only offers.
        </p>

        {status === 'success' ? (
          <div className="py-4">
            <p className="font-serif text-xl text-[var(--velmora-accent)]">
              Welcome to the Velmora Circle
            </p>
            <p className="text-sm text-[var(--velmora-text-muted)] mt-2">
              Check your inbox for your 10% off code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-transparent border border-[var(--velmora-border)] text-[var(--velmora-bg)] placeholder-[var(--velmora-text-muted)] text-sm focus:outline-none focus:border-[var(--velmora-accent)]"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter
