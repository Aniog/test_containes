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
    <section className="py-16 md:py-24 bg-accent/10">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-primary">Join the Velmora World</h2>
        <p className="mt-3 text-sm text-secondary">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <div className="mt-8 py-4 px-6 bg-cream border border-border">
            <p className="text-sm text-primary">Thank you for subscribing! Check your inbox for your welcome offer.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-cream border border-border text-primary text-sm placeholder:text-muted focus:outline-none focus:border-accent transition-colors duration-300"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-cream text-xs uppercase tracking-product font-medium hover:bg-accent-hover transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
