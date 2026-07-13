import { useState } from 'react'

const Newsletter = () => {
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
    <section className="py-16 md:py-24 bg-deep">
      <div className="max-w-xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-cream">Join the Inner Circle</h2>
        <p className="mt-3 text-sm text-cream/70">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
          Get 10% off your first order.
        </p>
        {submitted ? (
          <p className="mt-8 text-sm text-gold">Welcome to Velmora. Check your inbox for your 10% off code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-cream/30 text-cream placeholder:text-cream/40 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-cream px-8 py-3 text-xs uppercase tracking-ultra-wide font-medium hover:bg-gold-dark transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter
