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
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-light mb-4">
          Stay Connected
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
          Join for 10% Off
        </h2>
        <p className="text-cream/50 font-light text-sm mb-8 max-w-md mx-auto">
          Subscribe to receive your welcome discount, early access to new collections, and styling inspiration.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="text-gold font-serif text-lg">Thank you for joining us.</p>
            <p className="text-cream/50 text-sm mt-2">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-transparent border border-cream/20 text-cream text-sm font-light placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gold text-cream text-xs uppercase tracking-[0.2em] font-sans font-medium hover:bg-gold-light transition-colors border-none"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-[10px] text-cream/30 mt-4">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
