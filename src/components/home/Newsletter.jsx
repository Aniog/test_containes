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
    <section className="py-16 md:py-24 bg-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gold-400 text-xs tracking-wide-xl uppercase font-medium mb-3">
            Stay in Touch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-4">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-charcoal-300 text-sm mb-8 max-w-md mx-auto">
            Subscribe to receive exclusive offers, early access to new collections, 
            and styling inspiration delivered to your inbox.
          </p>

          {submitted ? (
            <div className="bg-gold-500/10 border border-gold-500/30 rounded p-6 max-w-md mx-auto">
              <p className="text-gold-400 font-serif text-lg">Thank you!</p>
              <p className="text-charcoal-300 text-sm mt-1">Check your inbox for your 10% discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-charcoal-700 border border-charcoal-600 text-cream-100 px-4 py-3.5 text-sm placeholder:text-charcoal-400 focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button
                type="submit"
                className="bg-gold-500 text-charcoal-900 px-6 py-3.5 text-xs tracking-nav uppercase font-semibold hover:bg-gold-400 transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-charcoal-500 text-[11px] mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
