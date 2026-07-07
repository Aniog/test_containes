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
    <section className="bg-velmora-obsidian py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p
          className="font-manrope text-[9px] tracking-[0.3em] uppercase mb-4"
          style={{ color: '#C9A96E' }}
        >
          Join the Circle
        </p>
        <h2
          className="font-cormorant text-3xl md:text-5xl font-light tracking-wide mb-4"
          style={{ color: '#FAF7F2' }}
        >
          10% Off Your First Order
        </h2>
        <p
          className="font-manrope text-sm leading-relaxed mb-10"
          style={{ color: '#B8A898' }}
        >
          Subscribe for early access to new collections, styling inspiration, and exclusive offers.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <div className="w-10 h-px bg-velmora-gold mx-auto mb-4" />
            <p className="font-cormorant text-xl italic" style={{ color: '#FAF7F2' }}>
              Welcome to Velmora. Your code is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-velmora-charcoal border border-velmora-stone text-velmora-cream placeholder-velmora-stone font-manrope text-xs px-5 py-4 focus:outline-none focus:border-velmora-gold transition-colors duration-200"
              style={{ color: '#FAF7F2' }}
            />
            <button
              type="submit"
              className="bg-velmora-gold font-manrope text-[10px] tracking-[0.2em] uppercase px-7 py-4 hover:bg-velmora-gold-light transition-colors duration-300 flex items-center justify-center gap-2 font-medium whitespace-nowrap"
              style={{ color: '#1A1714' }}
            >
              Subscribe
              <ArrowRight size={12} strokeWidth={2} />
            </button>
          </form>
        )}

        <p
          className="font-manrope text-[9px] mt-5 tracking-wider"
          style={{ color: '#B8A898' }}
        >
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
