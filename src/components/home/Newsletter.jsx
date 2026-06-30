import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="bg-espresso-800 text-cream py-20 md:py-28">
      <div className="container-editorial text-center max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-widest3 text-gold mb-4">Join Velmora</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-4">10% Off Your First Order</h2>
        <p className="text-cream/70 mb-9 leading-relaxed">
          Be the first to know about new collections, private sales, and styling notes —
          and enjoy 10% off your first piece.
        </p>

        {submitted ? (
          <p className="font-serif text-2xl text-gold-soft animate-fade-in">
            Welcome to Velmora. Check your inbox for your code.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-cream/30 text-cream placeholder-cream/50 px-5 py-3.5 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-espresso-900 px-6 py-3.5 text-xs uppercase tracking-widest2 font-medium hover:bg-gold-light transition-colors flex items-center justify-center gap-2"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
        <p className="text-[11px] text-cream/40 mt-5 tracking-wide">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
