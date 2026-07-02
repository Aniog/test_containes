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
    <section className="py-16 md:py-24 bg-espresso">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream">Join the Inner Circle</h2>
        <p className="mt-3 text-cream/60 text-sm">
          Be the first to know about new arrivals and receive 10% off your first order.
        </p>

        {submitted ? (
          <p className="mt-8 text-gold-light text-sm font-medium">
            Welcome to Velmora. Check your inbox for your exclusive offer.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-transparent border border-cream/30 text-cream text-sm placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gold text-cream text-sm uppercase tracking-wider font-medium hover:bg-gold-dark transition-colors border-none cursor-pointer whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
