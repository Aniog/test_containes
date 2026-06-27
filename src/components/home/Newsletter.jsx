import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Reveal from "@/components/ui/Reveal"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle")
  const [message, setMessage] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    setMessage("")
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error")
      setMessage("Please enter a valid email address.")
      return
    }
    setStatus("success")
    setMessage(`Welcome to Velmora. Your 10% off code is on its way to ${email}.`)
    setEmail("")
  }

  return (
    <section className="bg-ivory py-20 md:py-24">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <Reveal>
          <div className="relative overflow-hidden bg-espresso text-ivory px-8 md:px-16 py-14 md:py-20">
            {/* Decorative gold ring */}
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full border border-gold/30" />
            <div className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full border border-gold/15" />

            <div className="relative grid md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-7">
                <span className="eyebrow !text-gold-soft">The Velmora Circle</span>
                <h2 className="mt-3 font-serif text-3xl md:text-5xl text-ivory leading-[1.05]">
                  Join for 10% off your first order.
                </h2>
                <p className="mt-4 text-sm md:text-base text-ivory/75 max-w-md leading-relaxed">
                  Early access to new collections, gifting guides, and quiet
                  inspiration — delivered monthly.
                </p>
              </div>

              <form
                onSubmit={onSubmit}
                className="md:col-span-5 flex flex-col gap-3"
                aria-label="Newsletter sign up"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <div className="flex items-center border-b border-ivory/40 focus-within:border-gold-soft transition-colors">
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-transparent py-3 text-ivory placeholder:text-ivory/45 outline-none text-base"
                    autoComplete="email"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 py-3 text-[11px] uppercase tracking-[0.22em] text-gold-soft hover:text-ivory transition-colors"
                  >
                    Subscribe
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </button>
                </div>
                {status === "error" && (
                  <p className="text-[12px] text-rose-clay">{message}</p>
                )}
                {status === "success" && (
                  <p className="text-[12px] text-gold-soft">{message}</p>
                )}
                <p className="text-[11px] tracking-[0.12em] uppercase text-ivory/45">
                  By subscribing you agree to our privacy policy.
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}