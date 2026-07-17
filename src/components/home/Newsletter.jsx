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
    <section className="py-16 md:py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream">Join the Inner Circle</h2>
        <p className="mt-4 text-sm text-cream/60 max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive offers, and receive 10% off your first order.
        </p>

        {submitted ? (
          <p className="mt-8 text-sm text-gold-light font-medium">
            Welcome to Velmora. Check your inbox for your 10% off code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3.5 bg-transparent border border-cream/20 text-cream text-sm placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-gold text-cream font-sans text-sm font-medium uppercase tracking-widest hover:bg-gold-light transition-colors border-none cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
