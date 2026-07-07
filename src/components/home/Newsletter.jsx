import React, { useState } from "react"
import { Mail, Check } from "lucide-react"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="bg-ink text-ivory">
      <div className="container-wrap py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow text-gold-light">The Velmora Letter</span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-ivory max-w-2xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-5 text-[15px] text-ivory/70 max-w-xl leading-relaxed">
              Early access to new collections, quiet style notes, and the occasional
              letter from the atelier. No noise, no spam — just a hello when there's
              something worth saying.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-5 w-full"
            aria-label="Newsletter signup"
          >
            <div className="flex flex-col sm:flex-row items-stretch border-b border-ivory/30 focus-within:border-gold transition-colors duration-300">
              <div className="flex items-center gap-2 py-3 text-ivory/70">
                <Mail size={16} strokeWidth={1.5} />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-transparent border-0 outline-none text-ivory placeholder:text-ivory/40 py-3 px-3 font-sans text-[15px]"
                required
                aria-label="Email address"
              />
              <button
                type="submit"
                className="font-sans uppercase tracking-[0.18em] text-[12px] text-ivory py-3 px-2 hover:text-gold transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
            {submitted ? (
              <p
                role="status"
                className="mt-4 flex items-center gap-2 text-[13px] text-gold-light animate-fadeUp"
              >
                <Check size={14} strokeWidth={1.5} />
                Welcome — your code is on its way.
              </p>
            ) : (
              <p className="mt-4 text-[11px] text-ivory/50 font-sans">
                By subscribing you agree to receive marketing email. Unsubscribe any time.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
