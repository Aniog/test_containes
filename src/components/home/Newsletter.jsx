import { useState } from 'react'
import { Send } from 'lucide-react'

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
    <section className="py-20 md:py-28 bg-gradient-to-b from-brand-graphite to-brand-charcoal">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-sans tracking-mega-wide uppercase text-brand-gold mb-3">
          Stay in Touch
        </p>
        <h2 className="font-serif text-4xl md:text-heading text-brand-cream mb-4">
          Join for 10% Off
        </h2>
        <p className="text-brand-cream/60 mb-10 text-base">
          Subscribe to receive exclusive offers, early access to new collections,
          and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-2xl text-brand-gold mb-2">Welcome to Velmora</p>
            <p className="text-sm text-brand-cream/60">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-brand-charcoal border border-brand-divider/20 text-brand-cream placeholder:text-brand-muted text-sm tracking-wider focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-brand-gold text-brand-black font-sans text-sm font-semibold tracking-wider uppercase hover:bg-brand-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
