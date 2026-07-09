import { useState } from 'react'

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
    <section className="py-16 md:py-24 bg-velmora-charcoal">
      <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-velmora-gold mb-4">Insider Access</p>
        <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-white/60 mt-4 leading-relaxed">
          Be the first to discover new arrivals, exclusive offers, and styling inspiration delivered to your inbox.
        </p>

        {submitted ? (
          <div className="mt-10">
            <p className="font-serif text-xl text-white">Welcome to Velmora.</p>
            <p className="text-sm text-white/60 mt-2">Check your inbox for your exclusive code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-5 py-3.5 text-sm focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-white px-8 py-3.5 text-xs uppercase tracking-widest hover:bg-velmora-gold-light transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-[10px] text-white/30 mt-4 uppercase tracking-wider">
          No spam, unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}