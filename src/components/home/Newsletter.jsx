import { ArrowRight } from 'lucide-react'
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
    <section id="journal" className="bg-velmora-porcelain px-5 py-16 text-velmora-ink sm:px-8 md:py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-gold text-velmora-ink shadow-glow md:rounded-[3rem]">
        <div className="grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12 lg:p-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-olive">Private list</p>
            <h2 className="mt-4 font-serif text-5xl font-medium leading-tight md:text-7xl">Join for 10% off your first order</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-olive md:text-base">
              Receive quiet styling notes, early collection access, and thoughtful gift edits in your inbox.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col justify-end gap-4">
            <label htmlFor="newsletter-email" className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-olive">
              Email address
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="min-h-14 flex-1 rounded-full border border-velmora-ink/25 bg-velmora-ivory px-5 text-sm text-velmora-ink placeholder:text-velmora-taupe focus:border-velmora-ink focus:outline-none focus:ring-2 focus:ring-velmora-ivory/80"
                required
              />
              <button
                type="submit"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-velmora-ink px-7 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ivory transition hover:-translate-y-0.5 hover:bg-velmora-olive"
              >
                Join
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            {submitted && (
              <p role="status" className="text-sm font-semibold text-velmora-ink">
                Welcome to the list. Your first-order note is on its way.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
