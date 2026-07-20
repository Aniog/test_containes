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
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container-padding text-center max-w-2xl mx-auto">
        <h2 className="serif-heading text-4xl md:text-5xl mb-4">Join for 10% Off</h2>
        <p className="text-muted-foreground mb-8">
          Subscribe to receive exclusive offers, early access to new collections, and styling tips.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            required
          />
          <button type="submit" className="btn-accent whitespace-nowrap">
            Subscribe
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-accent text-sm">Thank you! Check your inbox for your discount code.</p>
        )}
      </div>
    </section>
  )
}
