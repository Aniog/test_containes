import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section className="py-20 md:py-28 bg-brand-base">
      <div className="section-padding max-w-xl mx-auto text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-6">
          Join the List
        </p>
        <h2 className="heading-serif text-3xl md:text-4xl text-white mb-4">
          Get 10% Off Your First Order
        </h2>
        <p className="text-brand-muted-light mb-10 text-sm leading-relaxed">
          Sign up for early access to new collections, exclusive offers, and styling inspiration delivered to your inbox.
        </p>

        {submitted ? (
          <div className="py-6 text-center">
            <p className="font-serif text-2xl text-brand-gold mb-2">Thank You</p>
            <p className="text-brand-muted-light text-sm">Check your inbox for your welcome discount.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 bg-transparent border border-brand-gold-light/30 text-white placeholder:text-brand-muted text-sm focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
