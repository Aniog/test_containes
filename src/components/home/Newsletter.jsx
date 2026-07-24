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
    <section className="bg-dark-surface py-16 md:py-20">
      <div className="max-w-xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-white">
          Join the Inner Circle
        </h2>
        <p className="mt-3 text-sm text-white/60">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="mt-8 text-accent text-sm tracking-wider">
            Thank you! Check your inbox for your welcome gift.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="bg-accent text-white px-8 py-3 text-xs tracking-widest uppercase hover:bg-accent-hover transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
