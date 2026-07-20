import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section id="journal" className="bg-velmora-ivory px-4 py-16 text-velmora-ink sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl overflow-hidden bg-velmora-blush shadow-velmora-lg">
        <div className="grid gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-14 lg:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-ui text-velmora-bronze">The Velmora Letter</p>
            <h2 className="mt-4 font-serif text-5xl leading-tight text-velmora-ink sm:text-6xl">
              Join for 10% off your first order.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-bronze">
              Receive quiet styling notes, early access to gift edits, and thoughtful care reminders for your demi-fine pieces.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-velmora-sand/70 bg-velmora-pearl p-4 shadow-sm sm:p-5">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                className="min-h-12 flex-1 rounded-full border border-velmora-sand bg-velmora-ivory px-5 text-sm text-velmora-ink placeholder:text-velmora-bronze/70 focus:border-velmora-gold focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-velmora-ink px-6 py-3 text-sm font-semibold uppercase tracking-ui text-velmora-ivory transition hover:-translate-y-0.5 hover:bg-velmora-gold hover:text-velmora-ink"
              >
                Sign Up
              </button>
            </div>
            {submitted && (
              <p className="mt-4 text-sm font-medium text-velmora-bronze" role="status">
                Welcome to Velmora. Your first-order note is on its way.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
