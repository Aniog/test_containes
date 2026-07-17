import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setDone(true)
    setEmail('')
  }

  return (
    <section className="bg-gold">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center md:py-24">
        <p className="text-[11px] uppercase tracking-widest2 text-ivory/80">
          Join the Velmora Circle
        </p>
        <h2 className="mt-4 font-serif text-3xl text-ivory md:text-5xl">
          10% off your first order
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ivory/85">
          Be the first to know about new collections, private sales, and styling
          notes. Plus, enjoy 10% off your first order.
        </p>

        {done ? (
          <p className="mt-8 font-serif text-xl italic text-ivory">
            Welcome to Velmora. Check your inbox for your code.
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
              className="flex-1 border border-ivory/40 bg-ivory/10 px-5 py-3.5 text-sm text-ivory placeholder:text-ivory/60 focus:border-ivory focus:outline-none"
            />
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 bg-ink px-7 py-3.5 text-[11px] uppercase tracking-widest2 text-ivory transition-colors hover:bg-espresso"
            >
              Subscribe
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        )}
        <p className="mt-4 text-[10px] uppercase tracking-widest2 text-ivory/60">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
