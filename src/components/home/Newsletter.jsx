import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section className="py-20 md:py-28 bg-cocoa text-bone">
      <div className="max-w-editorial mx-auto px-6 md:px-10 lg:px-14">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <span className="eyebrow text-gold-100">Letters from the studio</span>
          <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl text-bone">
            Join for 10% off your first order
          </h2>
          <p className="text-bone/80 max-w-md text-base leading-relaxed">
            Twice a month, never more. Studio notes, first dibs on new pieces, and the
            occasional story from our makers.
          </p>

          <form
            onSubmit={onSubmit}
            className="w-full max-w-md flex flex-col sm:flex-row items-stretch gap-3 mt-2"
          >
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-transparent border border-bone/30 px-4 py-3 text-bone placeholder-bone/50
                         focus:outline-none focus:border-gold-100 transition-colors"
            />
            <button
              type="submit"
              className="btn bg-gold-100 text-cocoa px-6 py-3 hover:bg-bone"
            >
              {submitted ? (
                <>
                  <Check size={14} strokeWidth={2} />
                  <span>Welcome</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <ArrowRight size={14} strokeWidth={1.5} />
                </>
              )}
            </button>
          </form>

          <span className="text-[11px] tracking-widest2 uppercase text-bone/50">
            No spam, ever. Unsubscribe anytime.
          </span>
        </div>
      </div>
    </section>
  )
}
