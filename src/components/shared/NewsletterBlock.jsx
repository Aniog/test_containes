import { useState } from 'react'

function NewsletterBlock() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section id="journal" className="rounded-3xl bg-velmora-ink px-6 py-10 text-velmora-ivory shadow-velmora md:px-10 md:py-12">
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-luxe text-velmora-sand">Private access</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Join for 10% off your first order</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-mist md:text-base">
            Sign up for first access to new drops, gifting edits, and quiet-luxury styling notes from Velmora.
          </p>
        </div>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="newsletter-email">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            className="w-full rounded-full border border-velmora-sand/40 bg-velmora-ivory px-5 py-4 text-sm text-velmora-ink outline-none transition focus:border-velmora-champagne"
          />
          <button type="submit" className="w-full rounded-full bg-velmora-champagne px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-velmora-ink transition hover:bg-velmora-sand">
            {submitted ? 'You’re on the list' : 'Unlock My Offer'}
          </button>
          <p className="text-xs text-velmora-sand">No spam. Just considered updates and early access.</p>
        </form>
      </div>
    </section>
  )
}

export default NewsletterBlock
