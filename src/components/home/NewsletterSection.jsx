import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function NewsletterSection() {
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
    <section className="py-16 md:py-24 bg-ink-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-lg mx-auto">
          <p className="font-sans text-xs tracking-widest uppercase text-gold-400 mb-3">
            Newsletter
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-light leading-tight">
            Join for 10% Off
            <span className="italic block mt-1">Your First Order</span>
          </h2>
          <p className="font-sans text-sm text-velvet-300 mt-4 leading-relaxed">
            Be the first to know about new collections, exclusive edits, and early access to sales.
          </p>

          {submitted ? (
            <p className="font-sans text-gold-400 mt-8 text-sm">
              Thank you! Check your inbox for your 10% off code.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-velvet-400 px-5 py-3.5 font-sans text-sm focus:outline-none focus:border-gold-400 transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 text-white px-8 py-3.5 font-sans text-sm tracking-widest uppercase hover:bg-gold-600 transition-colors"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}