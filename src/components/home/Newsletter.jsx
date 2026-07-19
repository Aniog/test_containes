import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="py-20 md:py-24 bg-espresso">
      <div className="max-w-xl mx-auto px-4 md:px-8 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-gold-light font-sans font-medium mb-3">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream tracking-wide mb-4">
          Enjoy 10% Off Your First Order
        </h2>
        <p className="text-taupe-light font-sans text-sm mb-8 leading-relaxed">
          Sign up for early access to new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="text-gold-light font-sans text-sm font-medium">
            Thank you! Your code will arrive shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3 bg-transparent border border-taupe-light/40 text-cream text-sm font-sans placeholder:text-taupe-light/50 focus:outline-none focus:border-gold-light transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gold text-espresso font-sans text-xs tracking-widest uppercase hover:bg-gold-light transition-colors whitespace-nowrap font-medium"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
