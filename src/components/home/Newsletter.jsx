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
    <section className="py-16 md:py-20 bg-velmora-surface border-y border-velmora-border/20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="text-velmora-gold text-xs tracking-widest-2xl uppercase font-sans mb-3">
          Stay in Touch
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-cream tracking-wide mb-3">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-sm text-velmora-muted mb-8">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="text-velmora-gold font-serif text-lg">Welcome to Velmora.</p>
            <p className="text-sm text-velmora-muted mt-1">Check your inbox for your exclusive discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-velmora-bg border border-velmora-border/40 text-velmora-cream text-sm placeholder:text-velmora-muted/50 focus:outline-none focus:border-velmora-gold/60 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-velmora-gold text-velmora-bg text-sm font-medium tracking-wider uppercase hover:bg-velmora-gold-light transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
