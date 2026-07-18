import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

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
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-white">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-white/60 text-sm tracking-wide">
          Subscribe to receive exclusive access to new collections, styling tips, and 10% off your first order.
        </p>
        <div className="w-12 h-px bg-gold mx-auto mt-6 mb-8" />

        {submitted ? (
          <p className="text-gold font-serif text-lg tracking-wide">
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
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 text-sm tracking-wide focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-white px-6 py-3 text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold-hover transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
