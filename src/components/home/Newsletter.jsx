import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

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
    <section id="journal" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
      <div className="overflow-hidden rounded-[2rem] bg-velmora-gold text-velmora-espresso shadow-velvet">
        <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:p-14">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-velmora-espresso/75">The private list</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">Join for 10% off your first order.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-espresso/80">Receive early access to new drops, gifting edits, and thoughtful jewelry care notes.</p>
          </div>
          <form onSubmit={handleSubmit} className="self-end">
            <div className="flex flex-col gap-3 rounded-[1.5rem] bg-velmora-porcelain p-2 shadow-soft sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="min-h-12 flex-1 rounded-full bg-transparent px-4 text-sm text-velmora-espresso placeholder:text-velmora-mink focus:outline-none"
              />
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-velmora-espresso px-6 py-3 text-xs font-extrabold uppercase tracking-[0.2em] text-velmora-porcelain transition hover:bg-velmora-bronze">
                Join <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            {joined && <p className="mt-3 text-sm font-semibold text-velmora-espresso" role="status">Welcome to Velmora. Your code is VELMORA10.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
