import { useState } from 'react'

const Newsletter = () => {
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
    <section className="py-16 lg:py-24 bg-accent-light">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl lg:text-4xl text-text">
          Join the Inner Circle
        </h2>
        <p className="mt-3 text-sm text-text-muted">
          Subscribe for 10% off your first order, early access to new drops, and styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-8 py-4 px-6 bg-surface border border-border rounded-sm">
            <p className="text-sm text-text font-medium">
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
              className="flex-1 px-4 py-3 bg-surface border border-border rounded-sm text-sm text-text placeholder:text-text-muted/60 focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-white text-xs font-medium uppercase tracking-product rounded-sm hover:bg-accent-hover transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter
