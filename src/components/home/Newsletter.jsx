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
    <section className="py-16 md:py-24 bg-brand-espresso">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
          Join the Inner Circle
        </h2>
        <p className="text-sm text-brand-muted-light mb-8 max-w-md mx-auto">
          Subscribe for 10% off your first order, early access to new collections, and styling inspiration.
        </p>

        {submitted ? (
          <p className="text-sm text-brand-gold font-medium">
            Welcome to Velmora. Check your inbox for your 10% off code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/50 px-4 py-3 text-sm focus:border-brand-gold focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-brand-gold text-white px-8 py-3 text-xs uppercase tracking-wide-xl font-medium hover:bg-brand-gold-dark transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
