import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

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
    <section className="py-16 lg:py-20 bg-charcoal">
      <div className="container-narrow max-w-2xl text-center">
        <p className="text-caption uppercase tracking-mega-wide text-gold-light mb-3">
          Stay in Touch
        </p>
        <h2 className="font-serif text-heading-1 text-cream mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-body text-cream/60 mb-8 max-w-md mx-auto">
          Be the first to discover new collections, exclusive offers, and
          styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-heading-3 text-gold-light">
              Welcome to the Velmora family
            </p>
            <p className="text-body-sm text-cream/50 mt-2">
              Check your inbox for your exclusive discount code.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/30 text-body focus:outline-none focus:border-gold-light transition-colors"
            />
            <button
              type="submit"
              className="btn-gold flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="text-[11px] text-cream/25 mt-5">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
