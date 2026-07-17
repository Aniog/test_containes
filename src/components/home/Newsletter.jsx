import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="py-20 lg:py-24 bg-espresso">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-4">Exclusive Access</p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-ivory leading-tight">
          Join for 10% off<br />
          <em className="italic">your first order</em>
        </h2>
        <p className="font-sans text-sm text-champagne/70 mt-5 mb-10 leading-relaxed">
          Be the first to know about new collections, exclusive offers, and styling inspiration delivered to your inbox.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center">
              <span className="text-gold text-xl">✓</span>
            </div>
            <p className="font-serif text-xl text-champagne">Welcome to Velmora</p>
            <p className="font-sans text-sm text-champagne/60">Your 10% discount code is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-4 bg-bark/30 border border-bark/60 text-champagne placeholder-mist font-sans text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-4 bg-gold text-velvet font-sans text-xs tracking-widest uppercase hover:bg-gold-light transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="font-sans text-[11px] text-mist mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
