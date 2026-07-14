import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="py-20 md:py-28 bg-gold">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-ink/70 mb-4">Join Velmora</p>
        <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
          10% off your first order
        </h2>
        <p className="text-ink/70 mt-4 max-w-md mx-auto">
          Be the first to know about new collections, private sales, and styling
          notes. Plus, enjoy 10% off your first order.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-2xl text-ink">
            Welcome to Velmora. Check your inbox.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-cream/90 px-5 py-3.5 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ink/30"
            />
            <button
              type="submit"
              className="bg-ink text-cream px-7 py-3.5 text-xs uppercase tracking-[0.25em] font-semibold hover:bg-charcoal transition-colors inline-flex items-center justify-center gap-2"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
        <p className="text-ink/50 text-xs mt-4">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
