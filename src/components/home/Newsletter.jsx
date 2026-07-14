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
    <section className="bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 py-16 md:py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-cream">
          Join the Inner Circle
        </h2>
        <p className="mt-3 text-sm text-brand-warm-gray font-sans">
          Subscribe for 10% off your first order, plus early access to new collections.
        </p>

        {submitted ? (
          <p className="mt-8 text-sm text-brand-gold font-sans font-medium">
            Welcome to Velmora. Check your inbox for your discount code.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full sm:flex-1 px-4 py-3 bg-transparent border border-brand-muted/50 text-brand-cream text-sm font-sans placeholder:text-brand-warm-gray focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button type="submit" className="btn-gold w-full sm:w-auto whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
