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
    <section className="bg-charcoal py-16 md:py-20">
      <div className="max-w-xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-ivory">Join the Inner Circle</h2>
        <p className="mt-3 text-ivory/60 text-sm">
          Be the first to know about new arrivals, exclusive offers, and receive 10% off your first order.
        </p>

        {submitted ? (
          <p className="mt-8 text-gold text-sm font-medium">
            Welcome to Velmora. Check your inbox for your 10% off code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-ivory/10 border border-ivory/20 text-ivory placeholder:text-ivory/40 text-sm rounded-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gold text-ivory text-xs font-medium tracking-widest uppercase hover:bg-gold-light transition-colors rounded-sm"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="mt-4 text-ivory/30 text-xs">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
