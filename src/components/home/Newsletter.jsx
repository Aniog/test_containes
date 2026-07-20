import { useState } from 'react'
import { Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return
    setDone(true)
    setEmail('')
  }

  return (
    <section className="bg-champagne text-cream">
      <div className="max-w-8xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-cream/80 mb-4">Join Velmora</p>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
          10% off your first order
        </h2>
        <p className="text-cream/85 mt-4 max-w-md mx-auto">
          Be the first to know about new collections, private sales and styling
          notes. Plus, enjoy 10% off your first order.
        </p>

        {done ? (
          <div className="mt-8 inline-flex items-center gap-2 bg-cream/15 px-6 py-4">
            <Check width={18} height={18} />
            <span className="text-sm tracking-wide">Welcome to Velmora. Check your inbox.</span>
          </div>
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
              className="flex-1 bg-cream/10 border border-cream/40 text-cream placeholder:text-cream/60 px-5 py-4 text-sm outline-none focus:bg-cream/20 transition-colors"
            />
            <button
              type="submit"
              className="bg-ink text-cream text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-cream hover:text-ink transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="text-[11px] text-cream/60 mt-4">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
