import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="text-[11px] uppercase tracking-widest2 text-champagne">Join Velmora</p>
        <h2 className="mt-4 font-serif text-4xl text-ivory md:text-5xl">
          10% off your first order
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-ivory/70">
          Be the first to know about new collections, private offers, and styling
          stories. Enjoy 10% off when you join.
        </p>

        {submitted ? (
          <div className="mt-8 inline-flex items-center gap-2 border border-gold/40 px-6 py-4 text-sm text-ivory">
            <Check size={16} strokeWidth={1.5} className="text-gold" />
            Welcome to Velmora. Check your inbox for your code.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 border border-ivory/25 bg-transparent px-5 py-4 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-gold px-7 py-4 text-[11px] uppercase tracking-wide2 text-ivory transition-colors hover:bg-gold-deep"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}
        <p className="mt-4 text-[10px] uppercase tracking-wide2 text-ivory/40">
          By subscribing you agree to our Privacy Policy
        </p>
      </div>
    </section>
  )
}
