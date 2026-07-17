import { useState } from 'react'
import { Mail } from 'lucide-react'

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
    <section className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-ink-900 to-ink-950 p-10 md:p-14 lg:p-16">
          <Mail className="w-8 h-8 text-gold-400 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-cream font-light">
            Join for 10% Off
          </h2>
          <p className="text-cream/60 text-sm mt-3 max-w-md mx-auto font-light">
            Be the first to know about new collections, exclusive previews, and receive 10% off your first order.
          </p>

          {submitted ? (
            <p className="mt-6 text-gold-300 text-sm font-medium">
              You&apos;re in! Welcome to the Velmora family.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 bg-cream/10 border border-cream/20 text-cream text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button
                type="submit"
                className="btn-accent whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}