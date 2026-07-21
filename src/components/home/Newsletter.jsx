import React, { useState } from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle") // idle | success | error

  const onSubmit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error")
      return
    }
    setStatus("success")
    setEmail("")
  }

  return (
    <section
      id="home-newsletter"
      className="bg-champagne text-ink"
    >
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
        <p className="text-[10px] md:text-[11px] tracking-widest3 uppercase text-ink/70 mb-4">
          Welcome to Velmora
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight">
          Join for 10% off
          <br className="hidden sm:block" />
          your first order.
        </h2>
        <p className="mt-5 text-ink/75 text-[15px] max-w-md mx-auto">
          Subscribe to receive early access to new collections, styling
          notes, and a little something special to start.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-9 md:mt-10 max-w-md mx-auto"
          noValidate
        >
          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status !== "idle") setStatus("idle")
              }}
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 bg-transparent border border-ink/40 text-ink placeholder:text-ink/50 focus:border-ink focus:outline-none transition-colors duration-300 text-sm"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-ink text-bone text-[11px] tracking-widest2 uppercase font-medium hover:bg-ink-soft transition-colors duration-300"
            >
              Subscribe
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </button>
          </div>

          <p
            className={cn(
              "mt-4 text-[12px] min-h-[18px]",
              status === "error" ? "text-ink" : "text-ink/70"
            )}
            role="status"
          >
            {status === "success" &&
              "Welcome. Check your inbox for your welcome code."}
            {status === "error" &&
              "Please enter a valid email address."}
            {status === "idle" &&
              "By subscribing you agree to our privacy policy. Unsubscribe at any time."}
          </p>
        </form>
      </div>
    </section>
  )
}
