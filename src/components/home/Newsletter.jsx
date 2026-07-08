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
    <section className="py-16 md:py-24 px-6 md:px-8 bg-noir">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream font-medium">
          Join the Inner Circle
        </h2>
        <p className="mt-3 text-cream/60 text-sm">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="mt-8 text-gold font-medium text-sm">
            Welcome to Velmora. Check your inbox for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-transparent border border-cream/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gold text-cream text-sm font-medium uppercase tracking-product hover:bg-gold-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
