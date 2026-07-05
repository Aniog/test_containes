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
    <section className="bg-brand-charcoal py-16 md:py-20 px-5">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-cream">
          Join the Inner Circle
        </h2>
        <p className="mt-3 font-sans text-sm text-brand-muted-light">
          Subscribe for 10% off your first order, plus early access to new collections.
        </p>

        {submitted ? (
          <p className="mt-8 font-sans text-sm text-brand-gold">
            Welcome to Velmora. Check your inbox for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3 bg-transparent border border-white/20 text-brand-cream font-sans text-sm placeholder:text-brand-muted-light focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-brand-gold text-white font-sans text-xs tracking-wider uppercase border-none cursor-pointer hover:bg-brand-gold-light transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
