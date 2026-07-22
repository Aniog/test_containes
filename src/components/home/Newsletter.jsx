import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

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
    <section className="section-padding">
      <div className="container-wide">
        <div className="relative bg-gradient-to-br from-velvet-elevated to-velvet-surface border border-velvet-border rounded-sm overflow-hidden">
          {/* Decorative gold accent */}
          <div className="absolute top-0 left-0 w-1 h-full bg-velvet-gold/60" />

          <div className="px-8 md:px-16 py-14 md:py-20 text-center max-w-2xl mx-auto">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-velvet-gold mb-4">
              Join the Inner Circle
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet-text mb-4">
              Get 10% Off Your First Order
            </h2>
            <p className="text-velvet-muted font-sans text-sm leading-relaxed mb-8">
              Subscribe for early access to new collections, exclusive styling tips, and members-only offers.
            </p>

            {submitted ? (
              <div className="flex items-center justify-center gap-2 text-velvet-gold">
                <Check className="w-5 h-5" />
                <span className="font-sans text-sm">Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-3.5 bg-velvet-bg border border-velvet-border text-velvet-text text-sm font-sans placeholder:text-velvet-dim rounded-sm focus:outline-none focus:border-velvet-gold transition-colors"
                />
                <button
                  type="submit"
                  className="btn-primary inline-flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Subscribe <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}