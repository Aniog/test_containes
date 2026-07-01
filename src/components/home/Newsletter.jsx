import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      console.log('Newsletter signup:', email)
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="py-20 md:py-24 bg-champagne">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs uppercase tracking-widest text-obsidian/60 mb-3">
          Join the Velmora Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-obsidian font-light leading-tight">
          10% off your first order
        </h2>
        <p className="font-sans text-sm text-obsidian/70 mt-4 leading-relaxed">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="mt-10 animate-fadeIn">
            <p className="font-serif text-xl text-obsidian italic">
              Welcome to the circle. ✦
            </p>
            <p className="font-sans text-sm text-obsidian/70 mt-2">
              Check your inbox for your 10% discount code.
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
              className="flex-1 bg-obsidian/10 border border-obsidian/20 text-obsidian placeholder-obsidian/40 font-sans text-sm px-5 py-4 outline-none focus:border-obsidian/50 transition-colors"
            />
            <button
              type="submit"
              className="bg-obsidian text-champagne font-sans text-xs uppercase tracking-widest px-7 py-4 hover:bg-obsidian/80 transition-colors duration-200 flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="font-sans text-[11px] text-obsidian/40 mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
