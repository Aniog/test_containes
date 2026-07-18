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
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="bg-espresso text-cream px-8 py-16 md:px-20 md:py-20 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-4">Join Velmora</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            10% off your first order
          </h2>
          <p className="mt-4 text-cream/70 max-w-md mx-auto leading-relaxed">
            Be the first to know about new collections, private sales, and
            styling notes. Enjoy 10% off your first order.
          </p>

          {submitted ? (
            <p className="mt-8 font-serif text-2xl text-gold">
              Thank you — check your inbox for your code.
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full sm:flex-1 bg-transparent border border-cream/30 text-cream placeholder:text-cream/50 px-5 py-3.5 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-gold text-espresso text-[11px] uppercase tracking-widest2 px-7 py-3.5 hover:bg-cream transition-colors flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight width={14} height={14} />
              </button>
            </form>
          )}
          <p className="mt-5 text-xs text-cream/40">
            By subscribing you agree to our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  )
}
