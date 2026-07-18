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
    <section className="bg-velvet-800 py-20 md:py-24">
      <div className="section-pad max-w-[1440px] mx-auto text-center">
        <p className="text-xs font-sans tracking-widest uppercase text-warm-400 mb-4">
          Join the Velmora Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream-50 mb-3">
          {submitted ? 'Welcome to the family.' : 'Enjoy 10% off your first order'}
        </h2>
        <p className="text-cream-50/60 font-sans text-sm mb-8 max-w-md mx-auto leading-relaxed">
          {submitted
            ? 'Check your inbox for your welcome gift — and be the first to know about new collections and restocks.'
            : 'Sign up for early access to new collections, exclusive offers, and stories from the studio.'}
        </p>

        {!submitted && (
          <form onSubmit={handleSubmit} className="flex items-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-cream-50/30 text-cream-50 placeholder:text-cream-50/30 px-5 py-3 text-sm outline-none focus:border-cream-50/60 transition-colors"
            />
            <button
              type="submit"
              className="bg-cream-50 text-velvet-800 px-5 py-3 hover:bg-cream-100 transition-colors"
              aria-label="Subscribe"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
