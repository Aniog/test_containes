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
    <section className="py-16 md:py-24 px-6 md:px-12 bg-espresso">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream mb-3">
          Join the Inner Circle
        </h2>
        <p className="text-sm text-cream/60 mb-8">
          Subscribe for 10% off your first order, early access to new drops, and styling inspiration.
        </p>

        {submitted ? (
          <p className="text-gold text-sm font-medium">
            Welcome to Velmora. Check your inbox for your 10% off code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-transparent border border-cream/30 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-cream px-6 py-3 text-sm uppercase tracking-widest font-sans font-medium hover:bg-gold-dark transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
