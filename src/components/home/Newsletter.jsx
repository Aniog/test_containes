import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section className="bg-espresso">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-8 md:py-28">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
          Join the List
        </p>
        <h2 className="mt-4 font-serif text-4xl text-canvas md:text-5xl">
          10% Off Your First Order
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-canvas/70">
          Be the first to know about new collections, private sales, and
          styling notes. Plus, enjoy 10% off your first order.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-xl italic text-gold-soft">
            Thank you — check your inbox for your code.
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
              className="h-12 flex-1 border border-canvas/25 bg-transparent px-4 text-sm text-canvas placeholder:text-canvas/50 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="group inline-flex h-12 items-center justify-center gap-2 bg-gold px-7 text-[11px] uppercase tracking-[0.2em] text-espresso transition-colors hover:bg-gold-soft"
            >
              Subscribe
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        )}
        <p className="mt-4 text-[11px] text-canvas/40">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
