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
    <section className="py-16 md:py-20" style={{ backgroundColor: '#1A1A1A' }}>
      <div className="max-w-xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white">
          Join the Velmora World
        </h2>
        <p className="mt-4 font-sans text-sm text-neutral-400">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="mt-8 font-sans text-sm text-brand-gold">
            Thank you! Check your inbox for your welcome gift.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-neutral-500 font-sans text-sm focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="font-sans text-xs uppercase tracking-wide-xl px-8 py-3 transition-colors hover:opacity-90"
              style={{ backgroundColor: '#C9A96E', color: '#1A1A1A' }}
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
