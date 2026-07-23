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
    <section className="py-16 md:py-24 border-t border-stone-700">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-stone-800 border border-stone-700 p-8 md:p-16 text-center">
          <h2 className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-stone-50">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-stone-400 text-sm md:text-base mt-4 max-w-md mx-auto">
            Be the first to know about new arrivals, exclusive offers, and styling inspiration.
          </p>

          {submitted ? (
            <div className="mt-8 animate-fade-in">
              <p className="font-serif text-lg text-gold">Thank you for subscribing!</p>
              <p className="text-stone-400 text-sm mt-2">Your 10% discount code is on its way.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full bg-stone-900 border border-stone-600 text-stone-50 px-4 py-3 text-sm placeholder:text-stone-500 focus:border-gold focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-gold text-stone-900 font-serif uppercase tracking-widest text-sm px-8 py-3 hover:bg-gold-light transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
