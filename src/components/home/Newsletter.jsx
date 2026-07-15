import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-editorial px-5 py-20 text-center md:px-8 md:py-28">
        <p className="text-[11px] uppercase tracking-widest2 text-gold-light">Join Velmora</p>
        <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
          10% off your first order
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-cream/70">
          Be the first to know about new collections, private sales, and styling
          notes. Enjoy 10% off when you join.
        </p>

        {submitted ? (
          <p className="mx-auto mt-8 max-w-md border border-gold/40 bg-ink-soft px-6 py-4 text-sm text-gold-light">
            Welcome to Velmora. Check your inbox for your 10% off code.
          </p>
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
              placeholder="Your email address"
              className="flex-1 border border-cream/25 bg-transparent px-5 py-4 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gold px-8 py-4 text-[11px] uppercase tracking-widest2 text-white transition-colors hover:bg-gold-deep"
            >
              Subscribe <ArrowRight className="h-4 w-4" />
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
