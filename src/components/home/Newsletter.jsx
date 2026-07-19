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
    <section className="bg-gold">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/80">
          Join the Velmora Circle
        </p>
        <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
          Enjoy 10% off your first order
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/85">
          Be first to know about new collections, private sales, and styling
          notes from the studio.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-2xl text-white">
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
              className="flex-1 border border-white/40 bg-white/10 px-5 py-4 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-espresso px-7 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-espresso-soft"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}
        <p className="mt-4 text-[11px] text-white/70">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
