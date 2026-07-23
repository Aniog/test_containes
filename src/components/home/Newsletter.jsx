import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.includes("@")) return
    setDone(true)
  }

  return (
    <section
      id="newsletter-eyebrow"
      className="bg-gold text-ink"
    >
      <div className="mx-auto max-w-editorial px-6 md:px-10 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="text-[11px] tracking-widest3 uppercase text-ink/70">
              The Velmora Letter
            </p>
            <h2
              id="newsletter-title"
              className="mt-3 font-serif text-[36px] md:text-[52px] leading-[1.05]"
            >
              Join for 10% off your first order.
            </h2>
            <p
              id="newsletter-sub"
              className="mt-4 text-[15px] text-ink/75 max-w-md"
            >
              Quiet dispatches from the studio — new pieces, restocks and the
              occasional invitation.
            </p>
          </div>

          <div className="md:col-span-5">
            {done ? (
              <div className="border border-ink/20 bg-bone/40 p-6">
                <p className="font-serif text-2xl text-ink">Welcome in.</p>
                <p className="mt-2 text-[14px] text-ink/70">
                  Your 10% code is on its way to {email}.
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="flex flex-col sm:flex-row gap-3"
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
                  placeholder="Email address"
                  className="flex-1 h-12 px-4 bg-transparent border border-ink/40 text-ink placeholder:text-ink/50 focus:border-ink focus:outline-none text-[14px]"
                />
                <button
                  type="submit"
                  className="h-12 px-6 bg-ink text-bone text-[12px] tracking-widest2 uppercase inline-flex items-center justify-center gap-2 hover:bg-ink-deep transition-colors"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
            <p className="mt-3 text-[12px] text-ink/60">
              By subscribing you agree to our privacy policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
