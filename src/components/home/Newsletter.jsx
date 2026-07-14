import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section className="bg-obsidian py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">
          Join the Inner Circle
        </p>
        <h2 className="font-serif font-light text-3xl md:text-4xl text-cream tracking-wide leading-snug">
          10% off your first order
        </h2>
        <p className="font-sans text-sm text-stone mt-4 leading-relaxed">
          Subscribe for early access to new collections, styling inspiration, and exclusive offers.
        </p>

        {submitted ? (
          <div className="mt-10 py-4 px-8 border border-gold inline-block">
            <p className="font-serif text-lg font-light text-gold italic">
              Welcome to Velmora. Your code is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-charcoal border border-stone text-cream placeholder-stone font-sans text-sm px-5 py-3.5 focus:outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-gold text-cream font-sans text-xs tracking-widest uppercase px-6 py-3.5 hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="font-sans text-xs text-stone/60 mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
