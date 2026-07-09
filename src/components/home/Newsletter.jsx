import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="py-16 md:py-20 bg-velmora-base">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-velmora-gold text-sm tracking-widest mb-3">JOIN THE VELMORA WORLD</p>
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream mb-4">
          10% Off Your First Order
        </h2>
        <p className="text-velmora-muted mb-8">
          Subscribe for exclusive access to new collections, styling tips, and member-only offers.
        </p>
        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-xl text-velmora-gold mb-2">Welcome to Velmora</p>
            <p className="text-velmora-muted text-sm">Check your inbox for your welcome discount.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-velmora-charcoal/50 border border-velmora-charcoal text-velmora-cream placeholder-velmora-muted text-sm focus:outline-none focus:border-velmora-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-velmora-gold text-velmora-base text-sm tracking-widest font-medium hover:bg-velmora-gold-dark transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
