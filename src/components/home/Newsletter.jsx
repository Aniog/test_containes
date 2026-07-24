import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { toast } from "sonner"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error")
      toast.error("Please enter a valid email address.")
      return
    }
    setStatus("success")
    toast.success("Welcome — your 10% off is on its way.")
    setEmail("")
  }

  return (
    <section className="bg-paper py-20 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="relative overflow-hidden bg-ink px-6 py-16 text-center text-paper md:px-16 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(184,147,90,0.18) 0%, rgba(20,17,15,0) 60%)",
            }}
          />
          <div className="relative">
            <p className="eyebrow text-champagne">Welcome Gift</p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-light leading-[1.05] md:text-6xl">
              Join for 10% off your first order
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-paper/70 md:text-base">
              Be the first to know about new collections, restocks, and the
              occasional letter from our founder.
            </p>
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 flex max-w-md flex-col items-stretch gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 border border-paper/20 bg-transparent px-4 py-4 text-sm text-paper placeholder:text-paper/40 focus:border-paper focus:outline-none"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 bg-paper px-7 py-4 text-[11px] uppercase tracking-[0.32em] text-ink transition-colors duration-300 hover:bg-gold"
              >
                Subscribe
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </button>
            </form>
            {status === "success" && (
              <p className="mt-5 text-xs uppercase tracking-[0.28em] text-champagne">
                Welcome to Velmora.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
