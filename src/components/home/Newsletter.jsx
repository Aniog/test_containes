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
    <section className="bg-dark-surface py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-serif text-3xl lg:text-4xl text-white">
          Join the Velmora World
        </h2>
        <p className="mt-3 text-dark-muted text-sm max-w-md mx-auto">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="mt-8 text-accent-light text-sm">
            Thank you! Check your inbox for your welcome gift.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full sm:flex-1 px-4 py-3 bg-transparent border border-white/20 text-white text-sm placeholder:text-dark-muted focus:outline-none focus:border-accent-light transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-accent text-white text-sm uppercase tracking-wider hover:bg-accent-dark transition-colors border-none"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
