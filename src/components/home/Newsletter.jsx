import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setDone(true)
    setEmail('')
  }

  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <p className="text-[11px] uppercase tracking-widest2 text-gold">Join Velmora</p>
        <h2 className="mt-3 font-serif text-4xl text-cream md:text-5xl">
          10% off your first order
        </h2>
        <p className="mt-4 text-base leading-relaxed text-cream/70">
          Be first to know about new collections, private sales, and styling notes. No noise — only the good things.
        </p>

        {done ? (
          <p className="mt-8 font-serif text-2xl italic text-gold">
            Welcome to Velmora. Check your inbox.
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
              className="flex-1 border-b border-cream/40 bg-transparent px-1 py-3 text-sm text-cream placeholder:text-cream/50 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 bg-gold px-8 py-3 text-[11px] uppercase tracking-widest3 text-ink transition-colors hover:bg-gold-deep hover:text-cream"
            >
              Subscribe
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        )}
        <p className="mt-4 text-xs text-cream/40">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
