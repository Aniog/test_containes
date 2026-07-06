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
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-champagne font-medium mb-4">
            Join the Circle
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory font-light leading-tight">
            10% off your first order
          </h2>
          <p className="font-sans text-sm text-ivory/50 mt-4 leading-relaxed">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="mt-10 py-4">
              <p className="font-serif text-xl text-champagne italic">
                Welcome to Velmora. Your code is on its way. ✦
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
                className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder-ivory/30 font-sans text-sm px-5 py-4 focus:outline-none focus:border-champagne transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-champagne text-obsidian font-sans text-xs tracking-widest uppercase font-semibold px-7 py-4 flex items-center justify-center gap-2 hover:bg-champagne-dark transition-colors duration-300 flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={2} />
              </button>
            </form>
          )}

          <p className="font-sans text-[11px] text-ivory/25 mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
