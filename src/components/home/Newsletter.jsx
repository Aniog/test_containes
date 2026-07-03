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
    <section className="py-16 md:py-24 bg-brand-accent-light">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-text-dark font-light">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-sm text-brand-muted font-light max-w-md mx-auto">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections.
        </p>
        {submitted ? (
          <p className="mt-8 text-sm text-brand-accent font-medium">Welcome to Velmora! Check your inbox for your discount code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 px-4 py-3 bg-white border border-brand-border text-sm text-brand-text-dark placeholder:text-brand-muted font-light focus:outline-none focus:border-brand-accent transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-brand-accent text-white uppercase tracking-[0.15em] text-xs font-medium px-8 py-3 hover:bg-brand-accent-hover transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
