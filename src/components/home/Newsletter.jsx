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
    <section className="py-16 md:py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-cream">Join the Inner Circle</h2>
          <p className="mt-3 text-sm text-cream/70 font-light">
            Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
          </p>

          {submitted ? (
            <div className="mt-8 py-4 border border-gold/30 bg-gold/5">
              <p className="text-sm text-gold">Thank you! Check your inbox for your welcome gift.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-transparent border border-cream/20 text-cream text-sm placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-white px-8 py-3 text-xs font-medium tracking-wider hover:bg-gold-dark transition-colors"
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
