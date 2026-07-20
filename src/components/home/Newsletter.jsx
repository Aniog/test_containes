import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import AnimateIn from '../AnimateIn'

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
    <section className="py-20 md:py-24 bg-ink">
      <div className="container-page">
        <AnimateIn className="max-w-2xl mx-auto text-center">
          <p className="text-gold-light text-xs tracking-widest uppercase font-sans font-medium mb-3">Join the Circle</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-4">
            Get 10% Off Your First Order
          </h2>
          <p className="text-cream/60 text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed">
            Be the first to know about new collections, exclusive previews, and special offers. Plus, enjoy 10% off your first purchase.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-gold-light">
              <Check className="w-5 h-5" />
              <span className="text-sm font-medium">You&apos;re in! Check your inbox for your code.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-cream/40 text-sm
                           focus:outline-none focus:border-gold/50 focus:bg-white/15 transition-all"
              />
              <button
                type="submit"
                className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3.5"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </AnimateIn>
      </div>
    </section>
  )
}