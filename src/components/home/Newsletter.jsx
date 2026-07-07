import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-5 text-center md:px-8">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
          Join the List
        </p>
        <h2 className="mt-4 font-serif text-4xl text-ivory md:text-5xl">
          10% Off Your First Order
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ivory/70">
          Be first to know about new collections, private sales, and styling
          notes. Plus, enjoy 10% off your first order.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-xl italic text-gold">
            Welcome to Velmora. Check your inbox for your code.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 border border-ivory/30 bg-transparent px-5 py-4 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-ivory transition-colors duration-300 hover:bg-gold-deep"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="mt-4 text-[11px] text-ivory/40">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
