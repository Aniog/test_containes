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
    <section className="py-20 md:py-28 bg-espresso text-ivory">
      <div className="max-w-2xl mx-auto px-6 md:px-10 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
          Join Velmora
        </p>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
          10% off your first order
        </h2>
        <p className="mt-5 text-ivory/75 leading-relaxed">
          Be the first to know about new collections, private sales, and styling
          notes. Enjoy 10% off your first order when you subscribe.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-2xl text-gold-soft">
            Welcome to Velmora. Check your inbox for your code.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-ivory/30 px-5 py-4 text-sm text-ivory placeholder:text-ivory/50 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-espresso text-[11px] uppercase tracking-[0.25em] px-8 py-4 hover:bg-gold-deep hover:text-ivory transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </form>
        )}
        <p className="mt-5 text-xs text-ivory/50">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
