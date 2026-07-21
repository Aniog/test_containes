import React, { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    const value = email.trim()
    if (!/^\S+@\S+\.\S+$/.test(value)) {
      setError("Please enter a valid email address.")
      setStatus("error")
      return
    }
    setStatus("success")
    setError("")
    setEmail("")
  }

  return (
    <section className="bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent">
          The Velmora Circle
        </p>
        <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-[#F3EDE2] md:text-4xl">
          Join for 10% off your first order
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#B9AC97]">
          New pieces, styling notes, and early access to limited editions — delivered quietly,
          about once a week.
        </p>

        {status === "success" ? (
          <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 border border-accent/40 bg-accent/10 px-6 py-4">
            <Check className="h-4 w-4 text-accent" strokeWidth={1.5} />
            <p className="text-sm tracking-wide text-[#E8DFCF]">
              Welcome to the circle — your code is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mx-auto mt-8 flex max-w-md items-stretch border-b border-[#B9AC97]/40 pb-0 transition-colors focus-within:border-accent">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              aria-label="Email address"
              className="w-full bg-transparent py-3 text-sm tracking-wide text-[#F3EDE2] placeholder:text-[#8D8171] focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center gap-2 whitespace-nowrap px-2 py-3 text-[11px] font-medium uppercase tracking-[0.24em] text-accent transition-colors hover:text-[#E8DFCF]"
            >
              Subscribe
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </button>
          </form>
        )}
        {status === "error" && error && (
          <p className="mt-3 text-xs tracking-wide text-[#E0A48F]">{error}</p>
        )}
      </div>
    </section>
  )
}
