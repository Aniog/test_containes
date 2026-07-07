import React, { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) return
    setDone(true)
    setEmail("")
    window.setTimeout(() => setDone(false), 4000)
  }

  return (
    <section className="bg-gold py-20 md:py-24">
      <div className="container-editorial flex flex-col items-center text-center">
        <p className="font-sans text-xs uppercase tracking-ultra text-ink/70">
          Join the List
        </p>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl font-light leading-tight text-ink md:text-5xl">
          Join for 10% off your first order
        </h2>
        <p className="mt-4 max-w-md font-serif text-lg italic text-ink/75">
          Early access to new collections, private sales, and a little gold in
          your inbox.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 border border-ink/30 bg-ivory-soft/80 px-5 py-3.5 font-sans text-sm text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none"
          />
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 bg-ink px-7 py-3.5 font-sans text-xs uppercase tracking-widest text-ivory transition-colors hover:bg-ink-soft"
          >
            {done ? (
              <>
                <Check className="h-4 w-4" strokeWidth={2} />
                Subscribed
              </>
            ) : (
              <>
                Subscribe
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </>
            )}
          </button>
        </form>
        <p className="mt-4 text-xs text-ink/60">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
