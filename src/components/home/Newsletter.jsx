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
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-charcoal-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white tracking-wider uppercase mb-4">
          Join for 10% off your first order
        </h2>
        <p className="text-cream-300 mb-8 max-w-xl mx-auto">
          Be the first to know about new collections, exclusive offers, and jewelry care tips.
        </p>

        {submitted ? (
          <div className="bg-gold-500/20 border border-gold-500/30 p-4 text-gold-400">
            Thank you for subscribing! Check your email for your discount code.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-charcoal-700 border border-charcoal-600 text-white placeholder:text-charcoal-400 focus:outline-none focus:border-gold-500 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gold-500 text-white font-medium tracking-wide hover:bg-gold-600 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
