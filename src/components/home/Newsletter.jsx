import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto max-w-3xl px-6 md:px-10 py-20 md:py-28 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
          Join the List
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight">
          10% Off Your First Order
        </h2>
        <p className="mt-5 text-cream/70 max-w-xl mx-auto leading-relaxed">
          Be first to know about new collections, private sales, and styling
          notes from the studio. Plus, enjoy 10% off your first order.
        </p>

        {submitted ? (
          <p className="mt-9 font-serif text-2xl text-gold">
            Welcome to Velmora. Check your inbox.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-9 flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-cream/30 text-cream placeholder:text-cream/50 px-5 py-4 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs uppercase tracking-[0.18em] bg-gold text-cream hover:bg-[#9a763f] transition-colors"
            >
              Subscribe
              <ArrowRight size={15} strokeWidth={1.5} />
            </button>
          </form>
        )}
        <p className="mt-5 text-xs text-cream/40">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
