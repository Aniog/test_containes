import { useState } from 'react'
import { Send } from 'lucide-react'

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
    <section className="py-20 lg:py-28 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-sans text-xs tracking-widest-2xl uppercase text-gold mb-3">
            Stay in touch
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-cream-100 mb-4">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-cream-400 text-sm mb-8">
            Be the first to know about new arrivals, exclusive offers, and styling tips.
          </p>

          {submitted ? (
            <div className="py-4">
              <p className="font-serif text-lg text-gold-light">Thank you for joining us.</p>
              <p className="text-sm text-cream-400 mt-2">Check your inbox for your welcome gift.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-charcoal-700 border border-charcoal-500 text-cream-100 placeholder:text-charcoal-400 px-5 py-3.5 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold-dark text-white px-6 py-3.5 transition-colors flex items-center gap-2"
                aria-label="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
