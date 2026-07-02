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
    <section className="py-20 md:py-28 bg-velmora-ink">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <p className="text-velmora-gold font-sans text-xs tracking-super uppercase mb-4">
          Stay Connected
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-white font-medium mb-4">
          Join for 10% off your first order
        </h2>
        <p className="text-white/50 text-sm mb-10 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and the stories behind our pieces.
        </p>

        {submitted ? (
          <p className="text-velmora-gold font-serif text-xl">
            Thank you — check your inbox for your 10% off code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 px-4 py-3 bg-transparent border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}