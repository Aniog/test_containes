import React, { useState } from "react"
import { Send, Check } from "lucide-react"

export default function NewsletterBlock() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle") // idle | success | error
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) {
      setError("Please enter your email.")
      setStatus("error")
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(trimmed)) {
      setError("That doesn't look like a valid email.")
      setStatus("error")
      return
    }
    setError("")
    setStatus("success")
    setEmail("")
  }

  return (
    <section
      aria-labelledby="newsletter-title"
      className="container-velmora py-20 md:py-28"
    >
      <div className="relative overflow-hidden bg-champagne-300 px-6 py-16 text-center md:px-16 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-multiply"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #1F1A14 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative mx-auto max-w-2xl">
          <p
            id="newsletter-eyebrow"
            className="font-sans text-[11px] font-medium uppercase tracking-widest2 text-espresso/70"
          >
            The Velmora Letter
          </p>
          <h2
            id="newsletter-title"
            className="mt-4 font-serif text-[32px] leading-[1.1] tracking-tight text-espresso sm:text-[40px] md:text-[48px]"
          >
            Join for{" "}
            <span className="italic">10% off</span>
            <br className="hidden sm:block" /> your first order
          </h2>
          <p
            id="newsletter-body"
            className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-espresso/75"
          >
            New pieces, restocks, and the occasional studio diary. No noise,
            no spam — just quiet notes when there's something worth saying.
          </p>

          {status === "success" ? (
            <div
              role="status"
              className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 border border-espresso/30 bg-ivory-50 px-5 py-4 font-sans text-[13px] text-espresso"
            >
              <Check className="h-4 w-4 text-champagne-500" strokeWidth={1.5} />
              <span>Welcome — check your inbox for your code.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              noValidate
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (status === "error") setStatus("idle")
                }}
                aria-invalid={status === "error"}
                aria-describedby={
                  status === "error" ? "newsletter-error" : undefined
                }
                className="flex-1 border border-espresso/30 bg-ivory-50 px-5 py-3.5 font-sans text-[14px] text-espresso placeholder:text-stone-300/80 focus:border-espresso focus:outline-none focus:ring-2 focus:ring-espresso/20"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-espresso px-6 py-3.5 font-sans text-[12px] font-medium uppercase tracking-widest2 text-ivory transition-colors duration-300 hover:bg-espresso-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2 focus-visible:ring-offset-champagne-300"
              >
                Subscribe
                <Send className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
            </form>
          )}
          {status === "error" && error && (
            <p
              id="newsletter-error"
              role="alert"
              className="mt-3 font-sans text-[12px] text-espresso/80"
            >
              {error}
            </p>
          )}
          <p className="mt-5 font-sans text-[11px] uppercase tracking-widest2 text-espresso/55">
            By subscribing you agree to our Privacy Policy
          </p>
        </div>
      </div>
    </section>
  )
}
