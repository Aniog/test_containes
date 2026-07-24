import React, { useState } from 'react'
import { useFadeIn } from '@/lib/useFadeIn'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { ref: fadeRef, visible } = useFadeIn(0.1)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-velmora-gold">
      <div ref={fadeRef} className={`max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="font-serif text-2xl md:text-3xl tracking-[0.05em] text-velmora-dark">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-sm md:text-base text-velmora-dark/70 mt-3 max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="font-serif text-lg text-velmora-dark mt-6">Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 bg-velmora-cream text-velmora-dark font-sans text-sm border border-velmora-cream focus:border-velmora-dark focus:outline-none transition-colors duration-300 placeholder:text-velmora-textSecondary"
            />
            <button
              type="submit"
              className="font-sans text-sm tracking-[0.15em] uppercase bg-velmora-dark text-velmora-warmWhite px-6 py-3 hover:bg-velmora-borderDark transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter
