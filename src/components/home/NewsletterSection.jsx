import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export default function NewsletterSection() {
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
    <section className="bg-velmora-espresso py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-5 text-center md:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-velmora-gold-light">
          Newsletter
        </p>
        <h2 className="font-serif text-3xl font-light tracking-wide text-white md:text-4xl">
          Join for 10% Off
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-white/60">
          Subscribe to receive exclusive early access to new collections, styling tips, and
          10% off your first order.
        </p>

        {submitted ? (
          <div className="mt-8 flex items-center justify-center gap-2 text-velmora-gold-light">
            <Check size={18} />
            <span className="text-sm font-medium">Thank you! Check your inbox for your code.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-white/15 bg-white/8 px-6 py-3.5 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-velmora-gold-light"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-velmora-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-velmora-gold-light"
            >
              Subscribe <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="mt-4 text-[11px] text-white/30">
          By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
