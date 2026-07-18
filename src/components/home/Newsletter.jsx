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
    <section className="bg-ink text-cream">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
        <p className="text-[11px] uppercase tracking-widest2 text-champagne">
          Join Velmora
        </p>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
          10% off your first order
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-cream/75">
          Be the first to know about new collections, private sales and styling
          notes — and enjoy 10% off your first piece.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-2xl italic text-champagne">
            Welcome to Velmora. Check your inbox for your code.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 border border-cream/30 bg-transparent px-5 py-4 text-sm text-cream placeholder:text-cream/50 focus:border-champagne focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-champagne px-7 py-4 text-[11px] uppercase tracking-widest2 text-cream hover:bg-champagne-deep transition-colors"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="mt-5 text-[11px] text-cream/50">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
