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
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-espresso px-6 md:px-16 py-12 md:py-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Join the Inner Circle
          </h2>
          <p className="mt-3 text-sm text-white/70 max-w-md mx-auto">
            Subscribe for 10% off your first order, early access to new collections, and styling inspiration.
          </p>

          {submitted ? (
            <p className="mt-8 text-gold font-medium">
              Welcome to Velmora. Check your inbox for your discount code.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gold text-white text-sm font-medium uppercase tracking-wider hover:bg-gold-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
