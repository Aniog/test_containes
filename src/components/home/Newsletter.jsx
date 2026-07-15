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
    <section className="bg-deep-charcoal py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-warm-cream tracking-wide">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-3 font-sans text-sm text-warm-gray-400 tracking-wide max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-8">
            <p className="font-serif text-lg text-champagne-gold">Welcome to Velmora</p>
            <p className="font-sans text-sm text-warm-gray-400 mt-2">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-transparent border-b border-warm-gray-600 text-warm-cream font-sans text-sm py-3 px-1 placeholder:text-warm-gray-500 focus:outline-none focus:border-champagne-gold transition-colors duration-300"
            />
            <button type="submit" className="btn-primary flex items-center gap-2 whitespace-nowrap">
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
