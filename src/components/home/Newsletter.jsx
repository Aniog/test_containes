import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setDone(true)
    setEmail("")
  }

  return (
    <section className="bg-gold">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-20">
        <h2 className="font-serif text-4xl text-cream md:text-5xl">
          Join for 10% Off
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream/85">
          Be first to know about new collections, private sales, and styling
          notes. Enjoy 10% off your first order.
        </p>

        {done ? (
          <p className="mt-8 font-serif text-2xl italic text-cream">
            Welcome to Velmora. Check your inbox.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-8 flex max-w-md items-center border border-cream/50 bg-cream/10"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent px-5 py-4 text-sm text-cream placeholder:text-cream/60 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-full items-center gap-2 bg-espresso px-6 py-4 text-xs uppercase tracking-[0.18em] text-cream transition-colors hover:bg-ink"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}
        <p className="mt-4 text-[11px] text-cream/70">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
