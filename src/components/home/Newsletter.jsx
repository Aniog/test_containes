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
    <section className="bg-obsidian py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-manrope text-xs uppercase tracking-[0.2em] text-gold mb-4">Join the Inner Circle</p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-cream mb-4">
          10% Off Your First Order
        </h2>
        <p className="font-manrope text-sm text-cream/60 leading-relaxed mb-10">
          Subscribe for early access to new collections, exclusive offers, and styling inspiration delivered to your inbox.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-cormorant text-2xl font-light text-gold italic">Thank you for joining us.</p>
            <p className="font-manrope text-xs text-cream/60 mt-2">Your 10% discount code is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-cream/20 text-cream placeholder-cream/40 font-manrope text-sm px-5 py-3.5 focus:outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian font-manrope text-xs uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-goldLight transition-colors duration-300 flex items-center justify-center gap-2 font-medium whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="font-manrope text-[10px] text-cream/30 mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
