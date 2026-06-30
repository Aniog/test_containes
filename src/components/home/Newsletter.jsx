import React, { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    setError("")
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address")
      return
    }
    setStatus("submitting")
    window.setTimeout(() => {
      setStatus("success")
      setEmail("")
    }, 600)
  }

  return (
    <section className="bg-noir text-bone section-pad">
      <div className="mx-auto max-w-page px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <p className="kicker kicker-on-dark text-bone-soft">
              Join the list
            </p>
            <h2 className="mt-4 headline-lg text-bone">
              10% off your first order
            </h2>
            <p className="mt-4 max-w-md editorial-body editorial-body-on-dark">
              New collections, styling notes, and quiet offerings from our studio — sent monthly, never more.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="md:col-span-6 w-full"
            noValidate
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                disabled={status === "submitting"}
                className="flex-1 bg-transparent border border-bone-soft/40 px-5 py-4 font-serif text-[17px] text-bone placeholder:text-bone-soft/60 focus:border-bone focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-primary !bg-bone !text-espresso !border-bone hover:!bg-white whitespace-nowrap"
              >
                {status === "success" ? (
                  <>
                    <Check className="h-3.5 w-3.5" strokeWidth={1.5} />
                    Subscribed
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </>
                )}
              </button>
            </div>
            {error && (
              <p className="mt-3 font-sans text-[11px] tracking-[0.18em] uppercase text-champagne-soft">
                {error}
              </p>
            )}
            {status === "success" && !error && (
              <p className="mt-3 font-sans text-[11px] tracking-[0.18em] uppercase text-bone-soft">
                Thanks — your code is on its way.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
