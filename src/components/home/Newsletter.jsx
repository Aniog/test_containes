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
    <section className="bg-velvet-950 py-20 md:py-24">
      <div className="max-w-xl mx-auto px-5 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-gold-500 font-medium mb-3">Stay Connected</p>
        <h2 className="font-serif text-2xl md:text-3xl text-white tracking-wide mb-3">
          Join for 10% off your first order
        </h2>
        <p className="text-sm text-velvet-400 mb-8 leading-relaxed">
          Be the first to know about new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="text-gold-400 font-serif text-lg italic">Thank you — check your inbox</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3 bg-velvet-800 border border-velvet-700 text-white text-sm placeholder:text-velvet-500 focus:outline-none focus:border-gold-500 transition-colors rounded-sm"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gold-600 text-white text-xs tracking-[0.1em] uppercase font-semibold hover:bg-gold-500 transition-colors rounded-sm"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
