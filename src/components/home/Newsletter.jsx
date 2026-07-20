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
    <section className="py-16 lg:py-24 bg-primary">
      <div className="max-w-xl mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-serif text-3xl lg:text-4xl text-white mb-3">
          Join the Inner Circle
        </h2>
        <p className="text-white/60 text-sm mb-8">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="text-accent font-medium">Thank you! Check your inbox for your welcome gift.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="bg-accent text-white px-8 py-3.5 uppercase tracking-widest text-sm font-medium hover:bg-accent-hover transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
