import { useState } from 'react'
import { Mail } from 'lucide-react'

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
    <section id="newsletter" className="py-16 md:py-24 bg-charcoal-800">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-2xl mx-auto text-center">
          <Mail size={28} className="text-gold-400 mx-auto mb-5" strokeWidth={1.2} />
          <h2 className="font-serif text-3xl md:text-4xl text-cream-50 mb-3">
            Join for 10% Off Your First Order
          </h2>
          <p className="font-sans text-sm text-charcoal-300 mb-8 max-w-md mx-auto">
            Subscribe to our newsletter for exclusive offers, early access to new collections, and styling inspiration.
          </p>

          {submitted ? (
            <div className="animate-fade-in">
              <p className="font-serif text-xl text-gold-400 mb-2">Welcome to Velmora</p>
              <p className="text-sm text-charcoal-300">Check your inbox for your exclusive discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 bg-charcoal-700 border border-charcoal-600 text-cream-100 px-5 py-3.5 text-sm font-sans placeholder-charcoal-400 focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button type="submit" className="btn-gold whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}

          <p className="text-[11px] text-charcoal-500 mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
