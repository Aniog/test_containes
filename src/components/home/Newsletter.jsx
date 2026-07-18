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
    <section className="bg-champagne">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-widest3 text-gold-deep mb-4">
            Join Velmora
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
            10% off your first order
          </h2>
          <p className="text-ink/70 mt-4">
            Be the first to know about new collections, private sales, and
            styling notes. Enjoy 10% off your first order.
          </p>

          {submitted ? (
            <p className="mt-8 font-serif text-2xl text-gold-deep italic">
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
                className="flex-1 bg-ivory border border-sand px-5 py-4 text-sm text-ink placeholder:text-taupe focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-espresso text-ivory text-xs uppercase tracking-widest2 font-medium px-8 py-4 hover:bg-ink transition-colors flex items-center justify-center gap-2"
              >
                Subscribe <ArrowRight size={15} />
              </button>
            </form>
          )}
          <p className="text-xs text-ink/50 mt-4">
            By subscribing you agree to our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  )
}
