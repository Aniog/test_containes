import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="bg-velmora-obsidian py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-4">
          Join the Circle
        </p>
        <h2 className="font-cormorant text-3xl md:text-5xl font-light text-velmora-ivory leading-tight">
          10% off your first order
        </h2>
        <p className="font-manrope text-sm text-velmora-subtle mt-4 leading-relaxed">
          Subscribe for early access to new collections, styling inspiration, and exclusive offers.
        </p>

        {submitted ? (
          <div className="mt-8 animate-fadeIn">
            <p className="font-cormorant text-xl italic text-velmora-gold">
              Welcome to Velmora. Your code is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-velmora-charcoal border border-velmora-charcoal text-velmora-ivory placeholder-velmora-subtle font-manrope text-sm px-5 py-4 focus:outline-none focus:border-velmora-gold transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-velmora-obsidian font-manrope text-xs uppercase tracking-widest px-6 py-4 hover:bg-velmora-gold-dark transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="font-manrope text-[10px] text-velmora-subtle mt-4 uppercase tracking-widest">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
