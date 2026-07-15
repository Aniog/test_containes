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
    <section className="bg-ink">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <p className="text-[11px] uppercase tracking-widest3 text-gold-soft">Join Velmora</p>
        <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
          10% off your first order
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-mist">
          Be the first to know about new collections, private sales, and styling notes.
          Enjoy 10% off when you join.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-xl italic text-gold-soft">
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
              className="flex-1 border border-ink-soft bg-transparent px-5 py-4 text-sm text-cream placeholder:text-mist focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 bg-gold px-8 py-4 text-[11px] uppercase tracking-widest2 text-cream transition-colors hover:bg-gold-deep"
            >
              Subscribe
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        )}
        <p className="mt-4 text-xs text-mist">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
