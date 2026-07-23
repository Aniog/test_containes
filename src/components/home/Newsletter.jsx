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
    <section className="bg-dark py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-dark-text mb-4">
          Join the Inner Circle
        </h2>
        <p className="text-dark-text/70 text-sm font-sans mb-8">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="text-accent-light font-sans text-sm">
            Thank you! Check your inbox for your welcome gift.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-transparent border border-dark-text/30 text-dark-text text-sm font-sans placeholder:text-dark-text/40 focus:outline-none focus:border-accent-light"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-accent text-cream text-sm uppercase tracking-widest border-none hover:bg-accent-hover transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
