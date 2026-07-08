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
    <section className="bg-gold py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="text-xs font-sans font-medium uppercase tracking-[0.3em] text-ivory/70 mb-4">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-ivory tracking-wide mb-3">
          10% off your first order
        </h2>
        <p className="font-sans text-sm text-ivory/80 font-light leading-relaxed mb-8">
          Subscribe for early access to new collections, exclusive offers, and styling inspiration delivered to your inbox.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <p className="font-serif text-xl font-light text-ivory italic">
              Welcome to Velmora ✦
            </p>
            <p className="text-sm font-sans text-ivory/70 mt-2">
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
              className="flex-1 bg-ivory/20 border border-ivory/40 text-ivory placeholder-ivory/50 text-sm font-sans px-5 py-3.5 focus:outline-none focus:border-ivory transition-colors"
            />
            <button
              type="submit"
              className="bg-obsidian text-ivory text-xs font-sans font-medium uppercase tracking-[0.2em] px-7 py-3.5 hover:bg-charcoal transition-colors duration-300 flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="text-[10px] font-sans text-ivory/50 mt-4 uppercase tracking-wider">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
