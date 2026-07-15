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
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <p className="font-sans text-xs uppercase tracking-widest2 text-gold-light">
          Join Velmora
        </p>
        <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
          10% off your first order
        </h2>
        <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-cream/65">
          Be the first to know about new collections, private sales, and
          styling notes. Enjoy 10% off your first piece.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-xl italic text-gold-light">
            Thank you — check your inbox for your code.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md items-center border-b border-cream/30"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent py-3 font-sans text-sm text-cream placeholder:text-cream/40 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="px-3 text-cream transition-colors hover:text-gold-light"
            >
              <ArrowRight size={20} />
            </button>
          </form>
        )}
        <p className="mt-4 font-sans text-[11px] text-cream/40">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
