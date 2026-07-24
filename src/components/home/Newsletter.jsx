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
    <section className="bg-obsidian py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-champagne mb-4">
          Join the Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-ivory tracking-wide mb-4">
          10% off your first order
        </h2>
        <p className="font-sans text-sm text-ivory/50 leading-relaxed mb-10">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <div className="w-12 h-px bg-champagne mx-auto mb-5" />
            <p className="font-serif text-xl text-champagne italic">
              Welcome to Velmora.
            </p>
            <p className="font-sans text-xs text-ivory/50 mt-2 tracking-wide">
              Your 10% discount code is on its way to your inbox.
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
              className="flex-1 bg-transparent border border-champagne/30 text-ivory placeholder-ivory/30 font-sans text-sm px-5 py-4 focus:outline-none focus:border-champagne transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-champagne text-obsidian font-sans text-xs tracking-widest uppercase px-6 py-4 hover:bg-champagne-dark transition-all duration-300 font-medium flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="font-sans text-[11px] text-ivory/25 mt-5 tracking-wide">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
