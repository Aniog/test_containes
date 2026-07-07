import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section className="py-20 md:py-28 bg-ink text-cream">
      <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">
          Join the List
        </p>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
          Enjoy 10% off your first order
        </h2>
        <p className="mt-5 text-sand/70 leading-relaxed">
          Be the first to know about new collections, private sales, and
          styling notes — plus a welcome gift in your inbox.
        </p>

        {submitted ? (
          <p className="mt-10 font-serif text-2xl text-champagne">
            Thank you. Check your inbox for your 10% code.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-10 flex flex-col sm:flex-row items-stretch gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-cream/30 px-5 py-3.5 text-sm text-cream placeholder:text-sand/50 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-7 py-3.5 text-xs uppercase tracking-[0.18em] hover:bg-gold-deep hover:text-cream transition-colors"
            >
              Subscribe
              <ArrowRight size={15} />
            </button>
          </form>
        )}
        <p className="mt-5 text-[11px] text-sand/50">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
