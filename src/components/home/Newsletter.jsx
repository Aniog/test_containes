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
    <section className="bg-espresso text-ivory">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-champagne mb-4">
            Join the House of Velmora
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight">
            Join for 10% off your first order
          </h2>
          <p className="mt-4 text-ivory/70 text-sm md:text-base">
            Be first to know about new collections, private sales, and styling notes — straight to your inbox.
          </p>

          {submitted ? (
            <p className="mt-8 font-serif text-2xl text-champagne italic">
              Thank you — welcome to Velmora.
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
                className="flex-1 bg-transparent border border-ivory/30 text-ivory placeholder:text-ivory/40 px-5 py-4 text-sm focus:outline-none focus:border-champagne transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-gold text-ivory hover:bg-gold-deep px-7 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300"
              >
                Subscribe
                <ArrowRight size={14} />
              </button>
            </form>
          )}
          <p className="mt-4 text-xs text-ivory/40">
            By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
