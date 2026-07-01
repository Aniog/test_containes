import React, { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)
  const [error, setError] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    setError("")
    if (!email.trim()) {
      setError("Please enter your email.")
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.")
      return
    }
    setDone(true)
    setEmail("")
  }

  return (
    <section className="py-20 md:py-28 bg-espresso text-ivory">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
          Join the List
        </p>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
          10% off your first order
        </h2>
        <p className="mt-5 text-ivory/75 leading-relaxed">
          Be first to know about new collections, private sales, and styling
          notes. Plus, enjoy 10% off your first order.
        </p>

        {done ? (
          <p className="mt-8 font-serif text-2xl text-gold">
            Welcome to Velmora. Check your inbox.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              aria-label="Email address"
              className="flex-1 bg-transparent border border-ivory/30 text-ivory placeholder:text-ivory/50 px-5 py-4 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-ivory uppercase tracking-[0.18em] text-xs px-8 py-4 hover:bg-gold-deep transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        {error && (
          <p className="mt-3 text-sm text-gold">{error}</p>
        )}
        <p className="mt-4 text-xs text-ivory/50">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
