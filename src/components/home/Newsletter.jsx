import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const Newsletter = () => {
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
    <section className="py-16 md:py-24 bg-warm-charcoal">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-warm-cream tracking-wide">
            Join for 10% Off
          </h2>
          <p className="mt-3 text-sm text-warm-cream/60 font-sans">
            Subscribe to receive exclusive access to new arrivals, special offers, and 10% off your first order.
          </p>
          <div className="w-12 h-px bg-gold mx-auto mt-4 mb-8" />

          {submitted ? (
            <div className="py-4">
              <p className="font-serif text-lg text-gold">Welcome to Velmora</p>
              <p className="text-sm text-warm-cream/60 mt-2">Check your inbox for your 10% discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border-b border-warm-gray-light/30 focus:border-gold text-warm-cream placeholder:text-warm-gray font-sans text-sm py-3 px-1 outline-none transition-colors duration-300"
              />
              <button type="submit" className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Newsletter
