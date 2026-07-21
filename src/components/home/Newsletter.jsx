import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) return
    setDone(true)
    setEmail("")
  }

  return (
    <section className="bg-gold text-cream">
      <div className="max-w-8xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest2 text-cream/80 mb-4">
            Join Velmora
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            10% off your first order
          </h2>
          <p className="mt-4 text-cream/85 text-sm md:text-base">
            Be first to know about new collections, private sales and styling
            notes. Enjoy 10% off when you join.
          </p>

          {done ? (
            <p className="mt-8 font-serif text-2xl italic">
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
                aria-label="Email address"
                className="flex-1 bg-cream/15 border border-cream/40 text-cream placeholder-cream/60 px-5 py-4 text-sm focus:outline-none focus:border-cream transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-espresso text-cream uppercase tracking-wide2 text-xs font-medium px-7 py-4 hover:bg-ink transition-colors"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </form>
          )}
          <p className="mt-4 text-xs text-cream/70">
            By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
