import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="py-20 md:py-28 bg-espresso">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
          Join the Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-4">
          10% Off Your First Order
        </h2>
        <p className="text-ivory/70 mb-8 max-w-md mx-auto">
          Be the first to know about new collections, private sales, and
          styling notes. Plus, enjoy 10% off your first order.
        </p>

        {submitted ? (
          <p className="text-ivory font-serif text-2xl italic">
            Welcome to Velmora. Check your inbox for your code.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-ivory/30 text-ivory placeholder:text-ivory/40 px-5 py-4 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-ivory text-xs uppercase tracking-[0.2em] font-medium px-8 py-4 hover:bg-gold-soft transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
        <p className="text-ivory/40 text-xs mt-5">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
