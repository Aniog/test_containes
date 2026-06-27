import { useState } from 'react'

const Newsletter = () => {
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
    <section className="py-20 md:py-28 border-t border-velmora-border bg-velmora-elevated">
      <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-text tracking-wide">
          Join for 10% Off
        </h2>
        <p className="mt-4 text-sm text-velmora-muted leading-relaxed">
          Subscribe to receive 10% off your first order, plus early access to new collections and exclusive offers.
        </p>
        <div className="w-12 h-px bg-velmora-gold mx-auto mt-5 mb-8" />

        {submitted ? (
          <p className="text-sm text-velmora-gold font-serif text-lg">
            Welcome to Velmora. Check your inbox for your code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border-b border-velmora-border text-velmora-text text-sm py-3 px-1 placeholder:text-velmora-dim focus:border-velmora-gold focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-velmora-black px-8 py-3 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-velmora-gold-light transition-colors flex-shrink-0"
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
