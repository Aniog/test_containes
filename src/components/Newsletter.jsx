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
    <section className="bg-espresso-900 text-cream">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center md:py-24">
        <p className="font-sans text-[11px] uppercase tracking-ultra text-gold-300">
          Join the House of Velmora
        </p>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl">
          Join for 10% off your first order
        </h2>
        <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-cream/70">
          Be the first to know about new collections, private sales, and
          styling notes from the studio.
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
            className="flex-1 border border-cream/30 bg-transparent px-4 py-3.5 font-sans text-sm text-cream placeholder:text-cream/40 focus:border-gold-300 focus:outline-none"
          />
          <button
            type="submit"
            className="group flex items-center justify-center gap-2 bg-gold-500 px-7 py-3.5 font-sans text-xs uppercase tracking-widest text-espresso-950 transition-colors hover:bg-gold-400"
          >
            Subscribe
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 font-sans text-sm text-gold-300">
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
