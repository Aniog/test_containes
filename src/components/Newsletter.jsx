import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

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
    <section className="py-16 md:py-24 bg-velmora-gold">
      <div className="max-w-2xl mx-auto px-6 md:px-10 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white">
          Join the Inner Circle
        </h2>
        <p className="font-sans text-sm text-white/80 mt-3">
          Subscribe for 10% off your first order, early access to new drops, and styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-8 flex items-center justify-center gap-2 text-white">
            <Check className="w-5 h-5" strokeWidth={1.5} />
            <span className="font-sans text-sm">Thank you for subscribing!</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/30 text-white placeholder:text-white/60 font-sans text-sm focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-white text-velmora-gold font-sans text-xs uppercase tracking-widest font-medium hover:bg-velmora-cream transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}