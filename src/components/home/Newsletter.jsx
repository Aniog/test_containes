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
    <section className="bg-velmora-ivory px-5 pb-16 text-velmora-ink sm:px-8 md:pb-24 lg:px-12">
      <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-espresso text-velmora-ivory shadow-editorial">
        <div className="grid gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-14 lg:py-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">
              First access
            </p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-velmora-pearl sm:text-5xl lg:text-6xl">
              Join for 10% off your first order.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-bone">
              Receive quiet styling notes, new arrivals, and early gifting edits from Velmora.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3" aria-label="Newsletter signup">
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                className="min-h-14 flex-1 border border-velmora-ivory/20 bg-velmora-ivory px-5 text-sm text-velmora-ink placeholder:text-velmora-taupe focus:border-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
              />
              <button
                type="submit"
                className="min-h-14 bg-velmora-champagne px-7 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-ink transition hover:bg-velmora-pearl focus:outline-none focus:ring-2 focus:ring-velmora-champagne focus:ring-offset-2 focus:ring-offset-velmora-espresso"
              >
                Join
              </button>
            </div>
            {submitted ? (
              <p role="status" className="text-sm font-semibold text-velmora-champagne">
                Welcome to Velmora. Your first-order note is on its way.
              </p>
            ) : (
              <p className="text-xs leading-6 text-velmora-bone">
                No noise. Just thoughtful launches and refined styling ideas.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
