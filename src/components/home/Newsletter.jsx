import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    if (!email) return
    setDone(true)
    setEmail("")
    setTimeout(() => setDone(false), 4000)
  }

  return (
    <section className="py-20 md:py-32">
      <div className="container-site">
        <div className="relative overflow-hidden bg-elevated border border-line">
          {/* Subtle gold radial wash in the corner */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(60% 80% at 100% 0%, rgba(201,168,118,0.18) 0%, rgba(0,0,0,0) 60%)",
            }}
          />
          <div className="relative px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <p className="eyebrow" id="newsletter-eyebrow">
                Join the List
              </p>
              <h2
                id="newsletter-title"
                className="display text-3xl md:text-5xl mt-3 text-balance"
              >
                Join for{" "}
                <span className="text-accent italic">10% off</span> your first
                order.
              </h2>
              <p
                id="newsletter-subtitle"
                className="mt-4 text-ink-secondary max-w-md"
              >
                Early access to new collections, private events, and the
                occasional handwritten note.
              </p>
            </div>
            <div className="md:col-span-5">
              <form
                onSubmit={onSubmit}
                className="flex flex-col sm:flex-row gap-3"
                aria-label="Subscribe to newsletter"
              >
                <label className="sr-only" htmlFor="newsletter-email">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="input-base flex-1"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                  disabled={done}
                >
                  {done ? (
                    <span className="inline-flex items-center gap-2">
                      <Check className="h-4 w-4" strokeWidth={1.5} /> Subscribed
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      Subscribe
                      <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                  )}
                </button>
              </form>
              <p className="mt-3 text-[11px] text-ink-muted tracking-wider2">
                By subscribing you agree to receive marketing email from Velmora.
                Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
