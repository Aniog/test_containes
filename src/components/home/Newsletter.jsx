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
    <section className="py-20 md:py-28 bg-ink text-cream">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <p className="text-[11px] uppercase tracking-widest2 text-gold mb-4">Join the Circle</p>
        <h2 className="font-serif text-4xl md:text-5xl tracking-wide leading-tight">
          Join for 10% off your first order
        </h2>
        <p className="mt-5 text-cream/70 leading-relaxed">
          Be first to know about new collections, private sales and styling
          notes from the studio.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-2xl text-gold">
            Welcome to Velmora. Check your inbox for your 10% code.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-9 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-cream/30 text-cream placeholder:text-cream/50 px-5 py-4 text-sm tracking-wide outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-cream px-8 py-4 text-[11px] uppercase tracking-widest2 hover:bg-gold-deep transition-colors flex items-center justify-center gap-2"
            >
              Subscribe <ArrowRight size={14} />
            </button>
          </form>
        )}
        <p className="mt-5 text-xs text-cream/50">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
