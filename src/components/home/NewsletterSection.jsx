import React from 'react'
import { Mail } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="bg-[var(--color-charcoal)] text-white section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <Mail size={32} className="text-[var(--color-gold)] mx-auto mb-6" />
        <h2 className="serif-heading text-4xl md:text-5xl mb-4">Join for 10% Off</h2>
        <p className="text-sm text-gray-400 mb-8">
          Subscribe to receive exclusive offers, early access to new collections, and styling tips.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="serif-heading text-xl text-[var(--color-gold)]">Welcome to Velmora</p>
            <p className="text-sm text-gray-400 mt-2">Check your inbox for your 10% off code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-gold)] placeholder-gray-500"
              required
            />
            <button type="submit" className="btn-accent whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
