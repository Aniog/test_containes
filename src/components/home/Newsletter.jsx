import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

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
    <section className="py-16 lg:py-24 bg-charcoal">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide font-light">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-sm text-white/60 font-sans leading-relaxed">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <div className="mt-8 py-4">
            <p className="text-gold font-serif text-lg tracking-wide">Welcome to Velmora</p>
            <p className="text-white/50 text-sm font-sans mt-2">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm font-sans px-5 py-3.5 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-white text-xs tracking-widest uppercase font-sans font-medium px-8 py-3.5 hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
