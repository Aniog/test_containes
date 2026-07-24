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
    <section className="py-16 md:py-20 bg-charcoal">
      <div className="section-padding max-w-2xl mx-auto text-center">
        <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold mb-4">
          Stay in the Loop
        </p>
        <h2 className="font-serif text-2xl md:text-heading-lg text-white mb-3">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-sm text-white/50 mb-8 max-w-md mx-auto">
          Be the first to discover new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-lg text-gold mb-2">Welcome to Velmora</p>
            <p className="text-sm text-white/50">Check your inbox for your exclusive discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-white/10 border border-white/15 text-white placeholder:text-white/30 text-sm px-5 py-3.5 font-sans focus:outline-none focus:border-gold/50 transition-colors"
            />
            <button
              type="submit"
              className="btn-accent flex items-center justify-center gap-2 sm:flex-shrink-0"
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
