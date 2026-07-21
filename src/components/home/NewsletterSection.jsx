import React, { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="bg-velmora-base py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs tracking-widest uppercase text-velmora-gold mb-3">
          Stay Connected
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Join for 10% Off
        </h2>
        <p className="text-sm text-white/60 mb-8">
          Your first order, plus early access to new collections and exclusive offers.
        </p>

        {status === 'success' ? (
          <div className="text-velmora-gold font-serif text-lg animate-fade-in">
            Welcome to Velmora. Check your inbox for your discount code.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-velmora-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-velmora-gold text-white text-xs tracking-widest uppercase hover:bg-velmora-gold-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
