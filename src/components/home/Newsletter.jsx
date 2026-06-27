import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) return
    setDone(true)
    setEmail("")
  }

  return (
    <section className="bg-ink text-ivory">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-champagne">
          Join the List
        </p>
        <h2 className="font-serif text-4xl font-light leading-tight sm:text-5xl">
          10% off your first order
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-ivory/70">
          Be first to know about new collections, private sales, and styling notes.
          Plus, enjoy 10% off your first order.
        </p>

        {done ? (
          <p className="mt-8 font-serif text-2xl italic text-champagne">
            Welcome to Velmora — check your inbox.
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
              className="flex-1 border border-ivory/30 bg-transparent px-5 py-4 text-sm text-ivory placeholder:text-ivory/40 focus:border-champagne focus:outline-none"
            />
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 bg-gold px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold-deep hover:text-ivory"
            >
              Subscribe
              <ArrowRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>
        )}
        <p className="mt-4 text-[11px] text-ivory/40">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
