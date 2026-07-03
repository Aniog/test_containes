import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | success | error

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="bg-espresso-bg text-cream py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Join Velmora</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-4">10% Off Your First Order</h2>
        <p className="text-cream/70 text-base mb-8">
          Be the first to know about new collections, private sales, and styling notes.
        </p>

        {status === 'success' ? (
          <p className="font-serif italic text-xl text-gold">
            Welcome to Velmora. Check your inbox for your code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setStatus('idle')
              }}
              placeholder="Your email address"
              className="flex-1 bg-transparent border-b border-cream/30 text-cream placeholder:text-cream/40 py-3 px-1 outline-none focus:border-gold transition-colors text-sm"
            />
            <button
              type="submit"
              className="bg-gold text-cream px-8 py-3 text-xs tracking-[0.25em] uppercase hover:bg-gold-deep transition-colors flex items-center justify-center gap-2 shrink-0"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-gold text-xs mt-3">Please enter a valid email address.</p>
        )}
      </div>
    </section>
  )
}
