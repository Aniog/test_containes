import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="bg-warm-dark">
      <div className="max-w-2xl mx-auto px-4 py-16 md:py-20 text-center">
        <span className="text-gold/80 text-xs tracking-[0.3em] uppercase font-medium">Stay Connected</span>
        <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide mt-3">
          Join for <span className="text-gold">10% Off</span> Your First Order
        </h2>
        <p className="text-white/60 text-sm md:text-base mt-4 max-w-md mx-auto">
          Be the first to discover new collections, exclusive previews, and insider stories from our workshop.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/40 text-sm font-sans focus:outline-none focus:border-gold transition-colors"
          />
          <button
            type="submit"
            className="btn-primary whitespace-nowrap flex items-center justify-center gap-2"
          >
            {submitted ? 'Subscribed!' : 'Subscribe'}
            {!submitted && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>

        {submitted && (
          <p className="text-gold text-sm mt-4 animate-fadeIn">
            Welcome to the Velmora family. Your code is on its way!
          </p>
        )}
      </div>
    </section>
  )
}