import { useState } from 'react'
import { Gift } from 'lucide-react'

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
    <section className="py-16 md:py-20 bg-brand-charcoal">
      <div className="section-padding text-center max-w-2xl mx-auto">
        <div className="flex items-center justify-center mb-5">
          <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center">
            <Gift className="w-5 h-5 text-brand-gold" />
          </div>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-brand-ivory tracking-[-0.01em] mb-3">
          Join for 10% off your first order
        </h2>
        <p className="font-sans text-sm text-brand-ivory/50 mb-8 max-w-md mx-auto">
          Be the first to discover new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-sans text-sm text-brand-gold">
              Welcome to the Velmora family! Check your inbox for your 10% discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 bg-brand-charcoal-light border border-brand-ivory/15 text-brand-ivory placeholder:text-brand-ivory/30 font-sans text-sm focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button type="submit" className="btn-gold text-xs whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}

        <p className="font-sans text-[0.65rem] text-brand-ivory/25 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
