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
        <h2 className="font-serif text-3xl md:text-4xl text-white">
          Join the Inner Circle
        </h2>
        <p className="mt-3 text-white/60 text-sm">
          Subscribe for 10% off your first order, early access to new drops, and styling inspiration.
        </p>

        {submitted ? (
          <p className="mt-8 text-gold-light text-sm">
            Welcome to Velmora. Check your inbox for your exclusive code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-4 py-3 text-sm focus:outline-none focus:border-gold-light transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-white px-6 py-3 uppercase tracking-extra-wide text-sm font-medium hover:bg-gold-light transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
