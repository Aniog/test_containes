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
    <section className="py-16 md:py-24 bg-brand-espresso">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <span className="font-sans text-xs uppercase tracking-wide-xl text-brand-gold">
          Stay Connected
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-white mt-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-white/60 mt-4 leading-relaxed">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-8 py-4">
            <p className="font-serif text-lg text-brand-gold">Welcome to Velmora</p>
            <p className="font-sans text-sm text-white/60 mt-2">Check your inbox for your exclusive code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder:text-white/40 font-sans text-sm focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-brand-gold text-white px-8 py-3.5 font-sans text-xs uppercase tracking-wide-xl hover:bg-brand-gold-dark transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
