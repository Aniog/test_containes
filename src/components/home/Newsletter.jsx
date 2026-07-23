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
    <section className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="text-[11px] uppercase tracking-widest2 text-gold-soft">
          Join the List
        </p>
        <h2 className="mt-3 font-serif text-3xl text-cream md:text-5xl">
          10% Off Your First Order
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-cream/70">
          Be the first to know about new collections, private sales, and styling
          notes from the studio. Plus, enjoy 10% off your first order.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-xl italic text-gold-soft">
            Thank you. Check your inbox for your code.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 border border-cream/30 bg-transparent px-5 py-4 text-sm text-cream placeholder:text-cream/50 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 text-xs uppercase tracking-widest2 text-ink transition-colors hover:bg-gold-deep hover:text-cream"
            >
              Subscribe
              <ArrowRight width={14} height={14} strokeWidth={1.5} />
            </button>
          </form>
        )}
        <p className="mt-4 text-[11px] text-cream/40">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
