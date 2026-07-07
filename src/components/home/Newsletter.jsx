import React, { useState } from "react"
import { Check } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)
  const [error, setError] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    setError("")
    if (!email.trim()) {
      setError("Please enter your email.")
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.")
      return
    }
    setDone(true)
  }

  return (
    <section className="bg-gold py-20 text-cream md:py-24">
      <div className="mx-auto max-w-2xl px-5 text-center md:px-8">
        <p className="text-xs uppercase tracking-[0.25em] text-cream/80">Join Velmora</p>
        <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
          10% off your first order
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream/85">
          Be the first to know about new collections, private sales, and styling
          stories. Plus, enjoy 10% off your first order.
        </p>

        {done ? (
          <div className="mt-8 inline-flex items-center gap-2 bg-cream/15 px-6 py-4 text-sm text-cream">
            <Check className="h-4 w-4" />
            Welcome to Velmora. Check your inbox for your code.
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 border border-cream/40 bg-cream/10 px-4 py-3.5 text-sm text-cream placeholder:text-cream/60 focus:border-cream focus:outline-none"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-ink px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-cream transition-colors hover:bg-cream hover:text-ink"
            >
              Subscribe
            </button>
          </form>
        )}
        {error && <p className="mt-3 text-xs text-cream/90">{error}</p>}
        <p className="mt-4 text-[11px] text-cream/70">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
