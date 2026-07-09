import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="bg-velmora-ivory px-4 pb-16 text-velmora-espresso sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-gold text-velmora-espresso shadow-soft">
        <div className="grid gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-14 lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.34em]">Private list</p>
            <h2 className="mt-3 font-serif text-5xl font-medium leading-tight">Join for 10% off your first order</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-espresso/80">
              Receive early access to limited drops, gifting edits, and quiet styling notes from Velmora.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="bg-velmora-ivory/95 p-4 shadow-soft sm:flex sm:items-center sm:gap-3">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              className="min-h-12 w-full bg-transparent px-2 text-sm text-velmora-espresso placeholder:text-velmora-taupe focus:outline-none sm:flex-1"
            />
            <button
              type="submit"
              className="mt-3 w-full bg-velmora-espresso px-6 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ivory transition hover:bg-velmora-charcoal sm:mt-0 sm:w-auto"
            >
              Join
            </button>
          </form>
        </div>
        {submitted && (
          <p className="border-t border-velmora-espresso/15 px-6 py-4 text-center text-sm font-semibold text-velmora-espresso" role="status">
            Welcome to Velmora. Your first-order code is on its way.
          </p>
        )}
      </div>
    </section>
  )
}
