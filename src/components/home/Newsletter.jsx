import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle") // idle | submitting | success

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setStatus("submitting")
    // simulate submission — wire to real endpoint later
    setTimeout(() => {
      setStatus("success")
      setEmail("")
    }, 700)
  }

  return (
    <section className="bg-gold text-espresso">
      <div className="container-x grid grid-cols-1 items-center gap-8 py-20 md:grid-cols-2 md:py-24">
        <div>
          <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-espresso/70">
            Join the List
          </span>
          <h2
            id="home-newsletter-title"
            className="h-section mt-3 text-4xl md:text-5xl"
          >
            10% off your first order
          </h2>
          <p className="mt-4 max-w-md text-base text-espresso/80">
            Early access to new pieces, occasional studio notes, and the
            occasional handwritten letter. No noise.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="w-full max-w-md md:justify-self-end"
          aria-label="Newsletter signup"
        >
          <div className="flex items-center border-b-2 border-espresso">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent py-3 font-sans text-sm text-espresso placeholder:text-espresso/50 focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center gap-2 py-3 font-sans text-[12px] uppercase tracking-[0.22em] text-espresso transition-opacity hover:opacity-70 disabled:opacity-50"
              disabled={status === "submitting"}
            >
              {status === "submitting"
                ? "Sending"
                : status === "success"
                ? "Welcome"
                : "Subscribe"}
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </button>
          </div>
          {status === "success" && (
            <p className="mt-3 font-sans text-xs text-espresso/80" role="status">
              Thank you. Check your inbox for your code.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
