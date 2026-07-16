import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section id="newsletter" className="section-shell py-20 sm:py-24">
      <div className="rounded-[2rem] bg-truffle px-6 py-12 text-pearl shadow-soft sm:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-4">
            <span className="eyebrow text-champagne">Private access</span>
            <h2 className="font-serif text-4xl leading-none sm:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="max-w-2xl text-base leading-8 text-pearl/80">
              New arrivals, early gifting edits, and limited drops delivered with restraint — never noise.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              className="h-14 flex-1 rounded-full border border-pearl/25 bg-pearl px-6 text-sm text-espresso placeholder:text-mocha focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="h-14 rounded-full bg-gold px-8 text-sm font-medium uppercase tracking-[0.18em] text-pearl transition duration-300 hover:bg-champagne hover:text-truffle"
            >
              Join now
            </button>
          </form>
        </div>
        {submitted ? (
          <p className="mt-4 text-sm text-champagne">
            Thank you — your first-order code is on its way.
          </p>
        ) : null}
      </div>
    </section>
  )
}
