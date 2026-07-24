import React, { useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [ref, isVisible] = useScrollAnimation(0.1)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section ref={ref} className={`py-16 md:py-24 bg-velmora-base animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-3">
          Join the Velmora Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream mb-4">
          10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-velmora-muted-light mb-8">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-xl text-velmora-gold">
              Welcome to the Velmora family
            </p>
            <p className="font-sans text-sm text-velmora-muted-light mt-2">
              Check your inbox for your discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-velmora-charcoal text-velmora-cream font-sans text-sm px-4 py-3 placeholder:text-velmora-muted focus:outline-none focus:border-velmora-gold transition-colors"
              required
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
