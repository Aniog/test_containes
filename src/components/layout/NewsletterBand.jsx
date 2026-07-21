import React, { useState } from "react"
import { Send } from "lucide-react"
import { toast } from "sonner"

export default function NewsletterBand() {
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email.")
      return
    }
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setEmail("")
      toast.success("You're in. Your 10% code is on its way.")
    }, 600)
  }

  return (
    <section className="bg-ink py-20 text-bone md:py-28">
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.32em] text-champagne">Join the list</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-bone md:text-5xl lg:text-6xl">
              Take 10% off your first order — and receive first access to new releases.
            </h2>
          </div>
          <form onSubmit={onSubmit} className="md:col-span-5">
            <label htmlFor="news-email" className="block text-[10px] uppercase tracking-[0.24em] text-bone/55">
              Your email
            </label>
            <div className="mt-3 flex items-center border-b border-bone/25 focus-within:border-champagne">
              <input
                id="news-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 bg-transparent py-4 text-bone placeholder:text-bone/40 focus:outline-none"
              />
              <button
                type="submit"
                disabled={submitting}
                className="flex items-center gap-2 px-2 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-bone transition-opacity duration-300 hover:opacity-80 disabled:opacity-50"
              >
                {submitting ? "Sending" : "Subscribe"}
                <Send className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
            </div>
            <p className="mt-4 text-[11px] leading-relaxed text-bone/55">
              By subscribing you agree to receive marketing emails. Unsubscribe any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
