import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="bg-gold py-16 md:py-20">
      <div className="mx-auto max-w-content px-6 text-center md:px-10">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-cream/80">
          Join the List
        </p>
        <h2 className="mt-3 font-serif text-4xl text-cream md:text-5xl">
          10% Off Your First Order
        </h2>
        <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-cream/85">
          Be first to know about new collections, private sales, and styling
          notes. Plus, enjoy 10% off your first order.
        </p>

        {submitted ? (
          <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 bg-cream/15 px-6 py-4">
            <Check size={18} className="text-cream" />
            <p className="font-sans text-sm text-cream">
              Thank you — check your inbox for your code.
            </p>
          </div>
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
              placeholder="Enter your email"
              className="flex-1 border border-cream/40 bg-cream/10 px-5 py-3.5 font-sans text-sm text-cream placeholder:text-cream/60 focus:border-cream focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-espresso px-7 py-3.5 font-sans text-xs uppercase tracking-widest2 text-cream transition-colors hover:bg-ink"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}
        <p className="mt-4 font-sans text-[11px] text-cream/70">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
