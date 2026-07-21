import React, { useState } from "react"
import { ArrowRight } from "lucide-react"
import { useReveal } from "@/hooks/useReveal"

export default function Newsletter() {
  const { ref, visible } = useReveal()
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
    <section className="bg-espresso py-20 md:py-28">
      <div
        ref={ref}
        className={`reveal ${visible ? "is-visible" : ""} mx-auto max-w-3xl px-5 text-center sm:px-8`}
      >
        <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
          Join Velmora
        </p>
        <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
          10% Off Your First Order
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-sans text-sm leading-relaxed text-cream/70">
          Be the first to know about new collections, private sales, and styling
          notes. Enjoy 10% off your first order when you join.
        </p>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setStatus("idle")
            }}
            placeholder="Your email address"
            aria-label="Email address"
            className="flex-1 border border-cream/30 bg-transparent px-5 py-4 font-sans text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 font-sans text-[11px] uppercase tracking-[0.18em] text-cream transition-colors hover:bg-gold-deep"
          >
            Subscribe
            <ArrowRight size={14} />
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 font-sans text-sm text-gold">
            Welcome to Velmora. Check your inbox for your 10% code.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 font-sans text-sm text-red-300">
            Please enter a valid email address.
          </p>
        )}
        <p className="mt-4 font-sans text-[11px] text-cream/40">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
