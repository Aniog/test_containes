import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="py-16 md:py-24 bg-velmora-gold">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
          Join the Velmora Circle
        </h2>
        <p className="text-white/90 font-sans text-sm md:text-base mb-8">
          Subscribe for early access to new collections, styling tips, and 10% off your first order.
        </p>

        {submitted ? (
          <div className="bg-white/10 backdrop-blur-sm py-6 px-8">
            <p className="font-serif text-lg text-white">Welcome to the circle.</p>
            <p className="text-white/80 text-sm mt-1">Check your inbox for your welcome gift.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 px-5 py-3.5 text-sm focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="bg-white text-velmora-charcoal px-8 py-3.5 text-xs tracking-widest uppercase font-medium hover:bg-velmora-ivory transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
