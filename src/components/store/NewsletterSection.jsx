import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="bg-velmora-ivory pb-20 sm:pb-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        <div className="rounded-[2.5rem] bg-velmora-gold px-6 py-10 text-velmora-ink shadow-velmora sm:px-10 sm:py-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-velmora text-velmora-ink/80">
              Join Velmora
            </p>
            <h2 className="mt-4 font-display text-4xl text-velmora-ink sm:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-4 text-base leading-7 text-velmora-ink/80">
              Receive early access to new drops, gifting edits, and editorial styling notes.
            </p>
          </div>
          <form
            className="mt-8 flex flex-col gap-3 md:flex-row"
            onSubmit={(event) => {
              event.preventDefault()
              if (!email.trim()) return
              setSubmitted(true)
              setEmail('')
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              className="h-14 flex-1 rounded-full border border-velmora-ink/15 bg-velmora-ivory px-6 text-sm text-velmora-ink placeholder:text-velmora-muted focus:outline-none focus:ring-2 focus:ring-velmora-ink/20"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="h-14 rounded-full bg-velmora-ink px-8 text-sm font-semibold uppercase tracking-[0.18em] text-velmora-soft transition hover:-translate-y-0.5"
            >
              Subscribe
            </button>
          </form>
          {submitted ? (
            <p className="mt-4 text-sm font-medium text-velmora-ink/80">
              Thank you — your welcome offer is on its way.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}
