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
    <section className="bg-obsidian py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-gold mb-4">Exclusive Access</p>
        <h2 className="font-cormorant text-4xl md:text-5xl text-ivory font-light mb-4">
          Join for 10% Off Your<br />
          <em className="italic">First Order</em>
        </h2>
        <p className="font-inter text-xs text-ivory/50 tracking-wide mb-10">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <div className="w-10 h-px bg-gold mx-auto mb-4" />
            <p className="font-cormorant text-2xl text-ivory italic">Thank you for joining us.</p>
            <p className="font-inter text-xs text-ivory/50 mt-2">Your 10% discount code is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder-ivory/30 font-inter text-xs px-5 py-4 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian font-inter text-xs uppercase tracking-widest px-6 py-4 hover:bg-gold-light transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="font-inter text-[10px] text-ivory/25 mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
