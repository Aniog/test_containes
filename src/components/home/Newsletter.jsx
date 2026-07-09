import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

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
    <section className="bg-velmora-ivory px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-blush text-velmora-espresso shadow-soft">
        <div className="grid items-center gap-8 px-6 py-12 md:grid-cols-[1fr_0.9fr] md:px-12 lg:px-16 lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.36em] text-velmora-goldDark">
              Private list
            </p>
            <h2 className="mt-3 font-serif text-5xl font-semibold leading-tight md:text-6xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-ink">
              Receive first access to new drops, gift edits, and quiet-luxury styling notes.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="bg-velmora-cream p-3 shadow-card">
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
                className="min-h-12 flex-1 border border-velmora-stone bg-velmora-cream px-4 text-sm text-velmora-espresso outline-none transition placeholder:text-velmora-taupe focus:border-velmora-gold focus:ring-2 focus:ring-velmora-gold/30"
              />
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-velmora-espresso px-5 text-xs font-bold uppercase tracking-[0.24em] text-velmora-cream transition hover:bg-velmora-goldDark"
              >
                Join
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            {submitted && (
              <p role="status" className="px-1 pt-3 text-sm font-semibold text-velmora-goldDark">
                Welcome to Velmora. Your code will arrive shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
