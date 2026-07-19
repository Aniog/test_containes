import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <span className="text-[11px] uppercase tracking-[0.3em] text-gold">Join Velmora</span>
        <h2 className="mt-3 font-serif text-3xl text-cream md:text-5xl">
          10% off your first order
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-cream/60">
          Be the first to know about new collections, private sales, and styling notes.
          Enjoy 10% off your first order when you join.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-xl italic text-champagne">
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
              className="flex-1 border-b border-cream/30 bg-transparent px-1 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 bg-gold px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] text-cream transition-colors hover:bg-gold-deep"
            >
              Subscribe
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </button>
          </form>
        )}
        <p className="mt-4 text-[11px] text-cream/40">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
