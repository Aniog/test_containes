import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function NewsletterSection() {
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
    <section className="bg-velmora-obsidian py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-manrope text-[10px] tracking-[0.3em] uppercase text-velmora-gold mb-4">
            Exclusive Access
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-white mb-4">
            Join for 10% Off
          </h2>
          <p className="font-manrope text-sm text-white/60 leading-relaxed mb-10">
            Be the first to discover new collections, exclusive offers, and styling inspiration. Plus, enjoy 10% off your first order.
          </p>

          {submitted ? (
            <div className="animate-fade-in">
              <div className="w-10 h-px bg-velmora-gold mx-auto mb-4" />
              <p className="font-cormorant text-2xl text-white italic">
                Welcome to Velmora
              </p>
              <p className="font-manrope text-xs text-white/50 mt-2">
                Your discount code is on its way to your inbox.
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
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 font-manrope text-sm px-5 py-4 focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-velmora-gold text-white font-manrope text-[11px] tracking-[0.18em] uppercase px-7 py-4 hover:bg-velmora-gold-dark transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={13} strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="font-manrope text-[10px] text-white/30 mt-5">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
