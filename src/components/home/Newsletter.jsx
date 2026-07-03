import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle") // idle | success | error

  const onSubmit = (e) => {
    e.preventDefault()
    const valid = /^\S+@\S+\.\S+$/.test(email)
    if (!valid) {
      setStatus("error")
      return
    }
    setStatus("success")
    setEmail("")
  }

  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto max-w-3xl px-5 md:px-8 py-20 md:py-28 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-cream/60 mb-4">
          Join the List
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight">
          10% Off Your First Order
        </h2>
        <p className="mt-5 text-cream/70 leading-relaxed max-w-md mx-auto">
          Be the first to know about new collections, private sales and styling
          notes. Enjoy 10% off your first order when you join.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-9 flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
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
            className="flex-1 bg-transparent border border-cream/30 text-cream placeholder:text-cream/40 px-5 py-4 text-sm outline-none focus:border-gold transition-colors"
          />
          <button
            type="submit"
            className="bg-cream text-ink px-8 py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-gold hover:text-cream transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-sm text-gold" role="status">
            Welcome to Velmora. Check your inbox for your 10% code.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-cream/80" role="alert">
            Please enter a valid email address.
          </p>
        )}

        <p className="mt-5 text-xs text-cream/40">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
