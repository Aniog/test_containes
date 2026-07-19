import React, { useState } from "react"
import Button from "@/components/ui/Button"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <section className="bg-velmora-ivory px-5 pb-16 text-velmora-espresso sm:px-8 md:pb-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-velmora-clay text-velmora-ivory shadow-soft">
        <div className="grid gap-8 px-6 py-10 md:grid-cols-[1fr_0.9fr] md:items-center md:px-12 md:py-14">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">The private list</p>
            <h2 className="font-serif text-4xl font-medium leading-none text-velmora-ivory md:text-6xl">
              Join for 10% off your first order.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-pearl md:text-base">
              Receive first looks, styling notes, and early access to limited gift edits.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="rounded-[1.5rem] bg-velmora-ivory p-3 text-velmora-espresso shadow-soft">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                className="min-h-12 flex-1 rounded-full border border-velmora-espresso/10 bg-velmora-porcelain px-5 text-sm text-velmora-espresso outline-none placeholder:text-velmora-taupe focus:border-velmora-champagne"
                required
              />
              <Button type="submit" variant="primary" className="min-h-12 px-7">
                Sign Up
              </Button>
            </div>
            {submitted && (
              <p className="px-4 pt-3 text-sm font-semibold text-velmora-clay">
                Welcome to Velmora. Your private code is VELMORA10.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
