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
    <section className="bg-charcoal py-16 md:py-20">
      <div className="max-w-xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-ivory font-normal">
          Join the Inner Circle
        </h2>
        <p className="font-sans text-sm text-ivory/60 mt-3">
          Be the first to know about new arrivals and receive 10% off your first order.
        </p>

        {submitted ? (
          <p className="font-sans text-sm text-gold mt-8">
            Welcome to Velmora. Check your inbox for your exclusive offer.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-transparent border border-ivory/30 text-ivory font-sans text-sm px-4 py-3 placeholder:text-ivory/40 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-ivory font-sans text-sm uppercase tracking-wider px-8 py-3 hover:bg-goldLight transition-colors border-none cursor-pointer whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
