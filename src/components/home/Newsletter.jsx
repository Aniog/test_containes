import React, { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="bg-velvet-900">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-xl mx-auto text-center">
          {!submitted ? (
            <>
              <p className="text-gold text-xs uppercase tracking-[0.15em] font-medium mb-3">
                Stay Connected
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white font-light mb-3">
                Join for 10% Off
              </h2>
              <p className="text-velvet-400 text-sm mb-8 max-w-sm mx-auto">
        Be the first to hear about new arrivals, exclusive drops, and receive 10% off your first order.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError('') }}
                    placeholder="Enter your email"
                    className="w-full bg-white/10 border border-velvet-700 text-white placeholder:text-velvet-500 px-5 py-4 text-sm focus:outline-none focus:border-gold transition-colors"
                    required
                  />
                  {error && (
                    <p className="text-red-400 text-xs mt-1 text-left">{error}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-gold text-white px-8 py-4 text-xs uppercase tracking-[0.15em] font-medium hover:bg-gold-dark transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
                >
                  Subscribe
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </>
          ) : (
            <div className="animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-gold" />
              </div>
              <h2 className="font-serif text-3xl text-white font-light mb-2">You&rsquo;re In!</h2>
              <p className="text-velvet-400 text-sm">
                Welcome to Velmora. Check your inbox for your 10% off code.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}