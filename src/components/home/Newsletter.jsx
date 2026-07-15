import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    if (!email || !/.+@.+\..+/.test(email)) return
    setSubmitted(true)
  }

  return (
    <section className="bg-canvas py-20 md:py-28">
      <div className="container-content">
        <div className="relative overflow-hidden bg-night px-8 py-20 text-onNight md:px-20 md:py-28">
          {/* Decorative gold frame */}
          <span className="pointer-events-none absolute left-8 right-8 top-8 h-px bg-gold/30" />
          <span className="pointer-events-none absolute bottom-8 left-8 right-8 h-px bg-gold/30" />
          <span className="pointer-events-none absolute left-8 right-8 top-8 bottom-8 border border-gold/20" />

          <div className="relative mx-auto max-w-2xl text-center">
            <p className="eyebrow-gold">The List</p>
            <h2
              className="display-lg mt-4 text-onNight text-balance"
              style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
            >
              Join for 10% off
              <br />
              <em className="italic text-gold">your first order.</em>
            </h2>
            <p className="mt-5 text-sm font-light leading-relaxed text-onNight-soft md:text-base">
              Subscribe for early access to new collections, the occasional
              journal entry, and a welcome discount, sent with care.
            </p>

            {submitted ? (
              <div className="mx-auto mt-10 inline-flex items-center gap-3 border border-gold/40 bg-nightSoft px-6 py-4">
                <Check className="h-4 w-4 text-gold" strokeWidth={1.6} />
                <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-onNight">
                  Welcome — check your inbox
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="mx-auto mt-10 flex max-w-md flex-col items-stretch gap-3 sm:flex-row"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 border-b border-onNight/30 bg-transparent px-2 py-3.5 text-sm font-light text-onNight placeholder:text-onNight/45 focus:border-gold focus:outline-none"
                />
                <button type="submit" className="btn-gold">
                  Subscribe
                  <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
                </button>
              </form>
            )}

            <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.24em] text-onNight/45">
              No spam. Unsubscribe in one click.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
