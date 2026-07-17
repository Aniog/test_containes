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
    <section className="bg-gold text-cream">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
        <p className="text-xs uppercase tracking-widest2 text-cream/80">
          Join the Velmora Circle
        </p>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl">
          10% Off Your First Order
        </h2>
        <p className="mt-4 text-sm text-cream/85">
          Be the first to know about new collections, private sales, and styling
          notes. Plus, enjoy 10% off your first order.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-2xl italic">
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
              className="flex-1 border border-cream/40 bg-transparent px-5 py-4 text-sm text-cream placeholder:text-cream/60 focus:border-cream focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-cream px-7 py-4 text-xs uppercase tracking-widest2 text-ink transition-colors hover:bg-espresso hover:text-cream"
            >
              Subscribe <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}
        <p className="mt-4 text-xs text-cream/70">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
