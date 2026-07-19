import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    setError("")
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Please enter a valid email.")
      return
    }
    setSubmitted(true)
  }

  return (
    <section className="container-x pb-24" aria-labelledby="newsletter-title">
      <div className="bg-ink text-cream px-6 md:px-16 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="label-2 text-cream/60 mb-4">Join the Atelier</p>
          <h2
            id="newsletter-title"
            className="font-serif text-3xl md:text-5xl leading-[1.05] mb-4 text-cream"
          >
            10% off your first piece.
          </h2>
          <p className="text-cream/70 text-sm md:text-base max-w-md">
            Early access to new collections, restocks, and the occasional
            studio journal. No noise — just a quiet note every few weeks.
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          className="w-full"
          aria-label="Newsletter sign-up"
        >
          {submitted ? (
            <div className="border border-cream/20 px-5 py-5">
              <p className="label-2 text-cream/70 mb-1.5">Welcome</p>
              <p className="font-serif text-xl text-cream">
                Check your inbox — your code is on the way.
              </p>
            </div>
          ) : (
            <div>
              <div className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 bg-transparent border border-cream/30 px-4 py-3.5 text-sm text-cream placeholder:text-cream/40 focus:border-champagne focus:outline-none transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-cream text-ink font-medium uppercase tracking-wider-2 text-xs hover:bg-champagne transition-colors"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
              {error && (
                <p className="mt-3 text-xs text-rose-gold">{error}</p>
              )}
              <p className="mt-4 text-[11px] text-cream/50 tracking-wider-2 uppercase">
                By subscribing, you agree to our terms & privacy policy.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
