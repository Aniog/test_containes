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
    <section className="py-16 md:py-20 bg-slate-850 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-900/20 via-transparent to-gold-800/10" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <p className="font-sans text-[10px] uppercase tracking-mega-wide text-gold-400 mb-4">
          Join the Velmora Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream-50 font-light mb-4 leading-tight">
          Get 10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-cream-300/50 mb-8 max-w-md mx-auto">
          Subscribe for exclusive access to new arrivals, styling tips, and member-only offers.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-lg text-gold-300 italic">Welcome to Velmora</p>
            <p className="font-sans text-xs text-cream-300/40 mt-2">Check your inbox for your discount code</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 bg-cream-50/5 border border-cream-100/10 text-cream-50 
                        font-sans text-sm placeholder:text-cream-300/30
                        focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20
                        transition-all duration-200"
            />
            <button
              type="submit"
              className="bg-gold-600 text-cream-50 px-8 py-3.5 font-sans text-xs uppercase tracking-ultra-wide
                        font-medium transition-all duration-300 hover:bg-gold-500 active:scale-[0.98]
                        border border-gold-600 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="font-sans text-[10px] text-cream-300/20 mt-6">
          By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
