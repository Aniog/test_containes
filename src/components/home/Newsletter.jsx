import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    setError("")
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      setError("Please enter a valid email address.")
      return
    }
    setStatus("submitting")
    // Simulate a short network round trip; in production, POST to your list.
    window.setTimeout(() => {
      setStatus("success")
      setEmail("")
    }, 700)
  }

  return (
    <section
      id="newsletter"
      className="bg-ink-600 py-20 text-ivory-50 md:py-28"
      aria-labelledby="newsletter-title"
    >
      <div className="container-x">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <p className="eyebrow text-gold-300">Join the inner circle</p>
            <h2
              id="newsletter-title"
              className="mt-4 font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-[60px]"
            >
              10% off your
              <em className="font-light not-italic text-gold-200"> first order</em>
            </h2>
            <p className="mt-5 max-w-md font-serif text-[18px] leading-relaxed text-ivory-50/75">
              Be the first to know about new collections, restocks, and
              the occasional quiet surprise.
            </p>
          </div>
          <div className="md:col-span-5">
            <form
              onSubmit={onSubmit}
              noValidate
              className="border border-ivory-50/20 bg-ink-500/40 p-2 pl-5"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent py-3 text-[15px] text-ivory-50 placeholder:text-ivory-50/50 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="flex h-12 flex-shrink-0 items-center gap-2 bg-ivory-50 px-5 text-[11px] font-semibold uppercase tracking-wider2 text-ink-600 transition-colors duration-300 hover:bg-gold-300 hover:text-ink-600 disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Subscribe"}
                  <ArrowRight size={14} strokeWidth={1.5} />
                </button>
              </div>
              {error && (
                <p role="alert" className="mt-2 px-1 text-[12px] text-gold-200">
                  {error}
                </p>
              )}
              {status === "success" && (
                <p role="status" className="mt-2 px-1 text-[12px] text-ivory-50/80">
                  Welcome — your code is on its way.
                </p>
              )}
              <p className="mt-3 px-1 text-[10px] uppercase tracking-wider2 text-ivory-50/45">
                By subscribing you agree to receive marketing emails. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
