import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-velmora-accent px-6 py-10 text-velmora-ink shadow-velmora-floating sm:px-8 lg:px-12 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-editorial text-velmora-ink/75">Private access</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Join for 10% off your first order</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-velmora-ink/80 sm:text-base">
              Get first access to limited drops, styling notes, and gifting edits curated for modern jewelry rituals.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email address"
                className="h-12 flex-1 rounded-full border border-velmora-ink/15 bg-velmora-paper px-5 text-sm text-velmora-ink outline-none placeholder:text-velmora-muted focus:border-velmora-ink"
              />
              <button
                type="submit"
                className="h-12 rounded-full bg-velmora-ink px-6 text-sm font-semibold text-velmora-paper transition hover:bg-velmora-cocoa"
              >
                Join the List
              </button>
            </div>
            <p className="text-sm text-velmora-ink/70">
              {submitted ? 'You’re in. Your welcome offer is on its way.' : 'No spam — only thoughtful launches and limited offers.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
