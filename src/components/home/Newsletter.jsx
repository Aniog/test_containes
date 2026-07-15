import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import { useReveal } from "@/lib/useReveal"
import { useRef } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)
  const containerRef = useRef(null)
  useReveal(containerRef, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return
    setDone(true)
  }

  return (
    <section ref={containerRef} className="bg-cream py-12 sm:py-16 lg:py-20">
      <div className="container-editorial">
        <div className="reveal bg-espresso text-cream px-6 sm:px-10 lg:px-16 py-14 sm:py-16 lg:py-20 relative overflow-hidden">
          {/* Subtle gold corner accent */}
          <div
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(168,128,74,0.25) 0%, transparent 70%)" }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow text-gold-200">Join The List</p>
              <h2
                id="newsletter-heading"
                className="font-serif text-[36px] sm:text-[48px] lg:text-[56px] mt-3 text-cream leading-[1.05]"
              >
                10% off your first order.
              </h2>
              <p className="mt-4 text-[15px] text-cream/75 max-w-md font-light">
                New collections, restocks, and quiet editorial — straight to your
                inbox. No noise, no spam.
              </p>
            </div>

            <div className="lg:col-span-5">
              {done ? (
                <div className="flex items-center gap-3 text-gold-200 font-sans text-[15px]">
                  <span className="w-10 h-10 grid place-items-center border border-gold-200/40 rounded-full">
                    <Check className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                  <span>Welcome — check your inbox for your code.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-0"
                >
                  <label htmlFor="newsletter-email" className="sr-only">Email</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 bg-transparent border border-cream/30 px-5 py-4 text-[14px] text-cream placeholder:text-cream/50 focus:outline-none focus:border-gold-200 transition-colors"
                  />
                  <button
                    type="submit"
                    className="btn px-6 py-4 bg-gold-500 text-cream hover:bg-gold-600 sm:rounded-none inline-flex items-center justify-center gap-2"
                  >
                    Subscribe
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </button>
                </form>
              )}
              <p className="mt-4 text-[11px] uppercase tracking-wider-2 text-cream/55">
                By subscribing, you agree to our terms. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
