import { useState } from 'react'

const NewsletterSection = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section id="newsletter" className="section-shell pt-0">
      <div className="rounded-[2.5rem] bg-velmora-ink px-5 py-10 text-velmora-ivory shadow-velmora sm:px-8 lg:px-12 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-luxury text-velmora-gold">Private access</p>
            <h2 className="font-display text-4xl sm:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="max-w-xl text-sm leading-8 text-velmora-ivory/76 sm:text-base">
              Be first to know about new drops, gifting edits, and styling notes from the Velmora studio.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                className="min-h-14 flex-1 rounded-full border border-white/15 bg-white/8 px-5 text-sm text-velmora-ivory placeholder:text-velmora-ivory/48 focus:border-velmora-gold focus:outline-none"
                aria-label="Email address"
              />
              <button type="submit" className="btn-gold whitespace-nowrap">
                Join now
              </button>
            </div>
            <p className="text-xs uppercase tracking-[0.22em] text-velmora-ivory/58">
              {submitted ? 'Welcome to Velmora. Your welcome code is on its way.' : 'No spam. Only refined newness and exclusive offers.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
