import { useState } from "react"
import { ArrowRight } from "lucide-react"

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
    <section className="bg-ink text-ivory">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
        <p className="text-[11px] uppercase tracking-widest3 text-gold-light mb-4">
          Join Velmora
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
          10% off your first order
        </h2>
        <p className="mt-5 text-base text-ivory/70 max-w-md mx-auto leading-relaxed">
          Be the first to know about new collections, private sales and styling
          notes. Plus, enjoy 10% off your first order.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-9 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
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
            className="flex-1 bg-transparent border border-ivory/30 text-white placeholder:text-ivory/40 px-5 py-4 text-sm focus:outline-none focus:border-gold-light transition-colors"
          />
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 bg-gold text-white text-[11px] uppercase tracking-widest2 font-medium px-8 py-4 hover:bg-gold-deep transition-colors"
          >
            Subscribe
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-sm text-gold-light">
            Welcome to Velmora. Check your inbox for your 10% code.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-red-300">
            Please enter a valid email address.
          </p>
        )}
        <p className="mt-5 text-[11px] text-ivory/40">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
