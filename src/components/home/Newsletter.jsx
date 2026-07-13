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
    <section className="py-20 lg:py-28 bg-velmora-espresso">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl lg:text-4xl text-white font-light">
          Join the Inner Circle
        </h2>
        <p className="mt-4 text-sm text-white/60">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration. 
          Plus, enjoy 10% off your first order.
        </p>

        {submitted ? (
          <div className="mt-8">
            <p className="text-sm text-velmora-gold-light font-medium">
              Welcome to Velmora. Check your inbox for your 10% off code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 text-sm focus:outline-none focus:border-velmora-gold-light transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-white px-6 py-3 text-xs uppercase tracking-extra-wide font-medium hover:bg-velmora-gold-dark transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
