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
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-20 md:py-28 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
          Join the Velmora Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl mb-4">
          10% off your first order
        </h2>
        <p className="text-cream/70 mb-9 max-w-md mx-auto">
          Be the first to know about new collections, private sales, and styling
          stories. Enjoy 10% off when you subscribe.
        </p>

        {submitted ? (
          <p className="font-serif text-2xl text-gold-soft">
            Thank you — check your inbox for your code.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-cream/30 text-cream placeholder:text-cream/50 px-5 py-4 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-cream text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-gold-soft transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
        <p className="text-[11px] text-cream/40 mt-5">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
