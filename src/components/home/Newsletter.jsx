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
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-gold font-medium mb-4">Join the Circle</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ivory leading-tight">
            10% off your<br />
            <em className="italic">first order</em>
          </h2>
          <p className="font-sans text-sm text-ivory-muted mt-5 leading-relaxed">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="mt-10 py-5 border border-gold/30">
              <p className="font-serif text-xl text-gold italic">Welcome to Velmora ✦</p>
              <p className="font-sans text-sm text-ivory-muted mt-2">Check your inbox for your 10% discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-charcoal border border-stone/50 text-ivory placeholder-stone font-sans text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-gold text-obsidian font-sans text-xs tracking-widest uppercase font-semibold px-6 py-4 hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={2} />
              </button>
            </form>
          )}

          <p className="font-sans text-xs text-stone mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
