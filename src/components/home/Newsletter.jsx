import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) return
    setSubmitted(true)
  }

  return (
    <section className="bg-gold">
      <div className="mx-auto max-w-8xl px-5 py-20 text-center md:px-8 md:py-24">
        <p className="text-[11px] uppercase tracking-widest3 text-ink/70">
          Join the Velmora Circle
        </p>
        <h2 className="mt-4 font-serif text-4xl text-ink md:text-5xl">
          10% Off Your First Order
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink/80 md:text-base">
          Be the first to know about new collections, private sales, and styling
          stories. Enjoy 10% off your first piece.
        </p>

        {submitted ? (
          <p className="mx-auto mt-8 max-w-md font-serif text-xl italic text-ink">
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
              className="flex-1 border border-ink/30 bg-cream px-5 py-3.5 text-sm text-ink placeholder:text-ink/50 focus:border-ink focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-ink px-7 py-3.5 text-[11px] uppercase tracking-widest2 text-ivory transition-colors hover:bg-espresso"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="mx-auto mt-4 max-w-xs text-[11px] text-ink/60">
          By subscribing you agree to receive marketing emails. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
