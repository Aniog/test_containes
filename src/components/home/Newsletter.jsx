import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle") // idle | success

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.includes("@")) return
    setStatus("success")
    setEmail("")
    setTimeout(() => setStatus("idle"), 4000)
  }

  return (
    <section className="bg-ink text-cream py-20 md:py-32">
      <div className="container-velmora">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow mb-4 md:mb-5">The Letter</p>
          <h2 className="display-headline text-3xl md:text-5xl text-cream mb-5 md:mb-6 leading-[1.1]">
            Join for{" "}
            <span className="italic text-gold">10% off</span>
            <br />
            your first order
          </h2>
          <p className="text-sm md:text-base text-muted-dark font-light leading-relaxed max-w-md mx-auto mb-8 md:mb-10">
            New collections, restocks, and the occasional edit from the studio — sent sparingly.
          </p>

          {status === "success" ? (
            <div className="flex items-center justify-center gap-3 text-cream py-4 border border-gold/30 max-w-md mx-auto">
              <Check className="h-4 w-4 text-gold" strokeWidth={1.5} />
              <span className="text-sm">Welcome to the letter — check your inbox.</span>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md mx-auto"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-transparent border border-cream/25 px-5 py-4 text-sm text-cream placeholder:text-muted-dark focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-ink px-7 py-4 text-[11px] uppercase tracking-[0.25em] font-sans flex items-center justify-center gap-2 hover:bg-gold-deep hover:text-cream transition-colors"
              >
                Subscribe
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-dark mt-6">
            No spam · Unsubscribe anytime
          </p>
        </div>
      </div>
    </section>
  )
}
