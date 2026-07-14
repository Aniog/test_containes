import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-champagne">
          Join the List
        </p>
        <h2 className="mt-4 font-serif text-3xl text-cream md:text-4xl">
          Enjoy 10% off your first order
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-stone">
          Be the first to know about new collections, private sales, and
          styling notes. Plus, receive 10% off your first purchase.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-xl italic text-champagne">
            Thank you — check your inbox for your code.
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
              className="flex-1 border border-cream/30 bg-transparent px-5 py-4 text-sm text-cream placeholder:text-stone focus:border-champagne focus:outline-none"
            />
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 bg-champagne px-8 py-4 text-xs uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-cream"
            >
              Subscribe
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        )}

        <p className="mt-4 text-[11px] text-stone">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
