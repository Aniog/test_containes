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
    <section className="bg-charcoal py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white">Join the Inner Circle</h2>
        <p className="mt-3 text-white/60 text-sm">
          Be the first to know about new arrivals, exclusive offers, and styling tips. Get 10% off your first order.
        </p>

        {submitted ? (
          <div className="mt-8">
            <p className="text-accent-light font-serif text-lg">Welcome to Velmora. Check your inbox for your 10% off code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent-light transition-colors"
            />
            <button
              type="submit"
              className="bg-accent text-white px-6 py-3 text-sm uppercase tracking-widest font-medium hover:bg-accent-light transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
