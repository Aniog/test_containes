import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="py-16 md:py-24 border-t border-velmora-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-velmora-gold rounded-sm p-8 md:p-12 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-white tracking-wide">
            Join for 10% Off Your First Order
          </h2>
          <p className="font-sans text-sm text-white/80 mt-3">
            Be the first to know about new arrivals, exclusive offers, and styling inspiration.
          </p>
          {submitted ? (
            <p className="font-sans text-sm text-white mt-6">Thank you for subscribing! Check your inbox for your 10% discount code.</p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-white/20 border border-white/30 rounded px-4 py-3 font-sans text-sm text-white placeholder-white/60 focus:outline-none focus:border-white/60"
              />
              <button
                type="submit"
                className="bg-velmora-ink text-white font-sans text-sm tracking-product px-6 py-3 rounded hover:bg-velmora-charcoal transition-colors duration-200"
              >
                SUBSCRIBE
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
