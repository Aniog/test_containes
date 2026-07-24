import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="section-padding bg-charcoal">
      <div className="container-narrow text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream font-light">
          Join the Inner Circle
        </h2>
        <p className="mt-3 text-sm text-taupe max-w-md mx-auto">
          Subscribe for 10% off your first order, early access to new collections, and jewelry styling inspiration.
        </p>

        {submitted ? (
          <p className="mt-8 text-sm text-gold">Thank you! Check your inbox for your welcome code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-transparent border border-taupe/40 text-cream text-sm placeholder:text-taupe/60 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="btn-primary flex items-center gap-2 px-6"
            >
              <span className="hidden md:inline">Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}