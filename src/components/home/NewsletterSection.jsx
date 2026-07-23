import { useState } from 'react'

function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) {
      return
    }

    setSubmitted(true)
    setEmail('')
  }

  return (
    <section id="newsletter" className="bg-obsidian py-16 text-ivory md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-ink px-6 py-10 shadow-soft sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-luxe text-champagne">Newsletter</p>
              <h2 className="max-w-xl text-4xl text-ivory sm:text-5xl">
                Join for 10% off your first order
              </h2>
              <p className="max-w-xl text-sm leading-8 text-ivory/74 sm:text-base">
                Receive new arrivals, thoughtful gifting edits, and styling notes directly from Velmora.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-full border border-white/15 bg-ivory px-5 py-4 text-sm text-ink placeholder:text-ink/45 outline-none transition focus:border-champagne"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-champagne px-6 py-4 text-sm font-medium uppercase tracking-[0.22em] text-obsidian transition hover:bg-ivory"
              >
                Join now
              </button>
              <p className="text-sm text-ivory/74" role="status">
                {submitted
                  ? 'Thank you — your welcome offer is on the way.'
                  : 'No spam, only softly curated launches and styling notes.'}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
