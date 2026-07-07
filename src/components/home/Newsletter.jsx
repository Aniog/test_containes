import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    console.log('Newsletter signup:', email)
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="py-20 md:py-24 bg-velmora-charcoal">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-manrope text-[10px] tracking-[0.3em] uppercase text-velmora-gold mb-3">
          Join the Circle
        </p>
        <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-text-light mb-3">
          10% Off Your First Order
        </h2>
        <p className="font-manrope text-sm text-velmora-text-muted leading-relaxed mb-8">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <div className="w-10 h-10 border border-velmora-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-velmora-gold text-lg">✓</span>
            </div>
            <p className="font-cormorant text-xl italic text-velmora-text-light">
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
              className="flex-1 bg-velmora-stone/30 border border-velmora-stone/50 text-velmora-text-light placeholder:text-velmora-text-muted font-manrope text-sm px-5 py-3.5 outline-none focus:border-velmora-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-velmora-obsidian font-manrope text-xs tracking-widest uppercase px-7 py-3.5 flex items-center justify-center gap-2 hover:bg-velmora-gold-light transition-colors duration-300 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={13} strokeWidth={2} />
            </button>
          </form>
        )}

        <p className="font-manrope text-[10px] text-velmora-text-muted mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
