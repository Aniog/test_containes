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
    <section className="bg-gold text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 text-center">
        <p className="text-[11px] uppercase tracking-[0.25em] text-cream/80 mb-4">
          Join the List
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light">
          10% Off Your First Order
        </h2>
        <p className="mt-4 text-cream/85 max-w-md mx-auto leading-relaxed">
          Be first to know about new collections, private sales, and styling notes —
          plus a welcome gift in your inbox.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-3"
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
            className="flex-1 bg-cream/15 border border-cream/40 text-cream placeholder-cream/60 px-5 py-3.5 text-sm focus:outline-none focus:border-cream transition-colors"
          />
          <button
            type="submit"
            className="bg-ink text-cream px-7 py-3.5 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-espresso transition-colors inline-flex items-center justify-center gap-2"
          >
            Subscribe <ArrowRight size={14} />
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-sm text-cream">
            Welcome to Velmora — check your inbox for your 10% code.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-ink/80">
            Please enter a valid email address.
          </p>
        )}
      </div>
    </section>
  )
}
