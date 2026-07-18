import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <p className="text-[11px] uppercase tracking-[0.3em] text-champagne/70">
          Join Velmora
        </p>
        <h2 className="mt-4 font-serif text-3xl text-cream md:text-4xl">
          10% Off Your First Order
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream/70">
          Be the first to know about new collections, private sales, and
          styling notes — and enjoy 10% off your first piece.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-xl italic text-champagne">
            Welcome to Velmora. Check your inbox for your code.
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
              className="h-12 flex-1 border border-cream/30 bg-transparent px-4 text-sm text-cream placeholder:text-cream/40 focus:border-champagne focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 bg-gold px-8 text-xs uppercase tracking-[0.2em] text-cream transition-colors hover:bg-gold-dark"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}
        <p className="mt-4 text-[11px] text-cream/40">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
