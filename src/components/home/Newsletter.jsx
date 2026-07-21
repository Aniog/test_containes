import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setJoined(true)
    setEmail('')
  }

  return (
    <section className="bg-velmora-ivory px-4 pb-20 text-velmora-cream sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-7xl bg-velmora-oxblood px-6 py-12 shadow-editorial sm:px-10 lg:px-16 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Velmora letter</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-velmora-cream sm:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-mist">
              Receive styling notes, new drops, and gifting reminders before everyone else.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-[1fr_auto]" aria-label="Newsletter signup">
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="min-h-14 w-full border border-velmora-champagne/35 bg-velmora-cream px-4 text-sm font-semibold text-velmora-espresso placeholder:text-velmora-umber focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
            />
            <button
              type="submit"
              className="min-h-14 bg-velmora-champagne px-6 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-cream focus:outline-none focus:ring-2 focus:ring-velmora-cream"
            >
              Join
            </button>
            {joined && (
              <p className="text-sm font-semibold text-velmora-cream sm:col-span-2" role="status">
                Welcome to Velmora. Your first-order note is on its way.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
