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
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white">
          Join the Velmora World
        </h2>
        <p className="mt-4 text-sm text-white/60 max-w-md mx-auto">
          Subscribe for early access to new collections, styling tips, and 10% off your first order.
        </p>

        {submitted ? (
          <p className="mt-8 text-sm text-gold font-medium">
            Thank you! Check your inbox for your welcome gift.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gold text-white text-sm font-medium tracking-wide hover:bg-gold-light transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
