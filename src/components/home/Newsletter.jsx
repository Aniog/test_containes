import { useState } from 'react'
import LuxuryButton from '@/components/common/LuxuryButton.jsx'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setJoined(true)
    setEmail('')
  }

  return (
    <section id="journal" className="bg-velmora-cream px-4 pb-20 text-velmora-ink sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-espresso text-velmora-cream shadow-soft">
        <div className="grid gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-14 lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-champagne">Velmora Notes</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold leading-none text-velmora-cream sm:text-6xl">
              Join for 10% off your first order.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-parchment/80">
              Receive early access to capsule drops, styling rituals, and gifting edits—sent quietly, never constantly.
            </p>
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="min-h-12 flex-1 border border-velmora-champagne/40 bg-velmora-cream px-4 text-sm text-velmora-ink placeholder:text-velmora-stone focus:border-velmora-champagne focus:outline-none"
              />
              <LuxuryButton type="submit" className="min-h-12">
                Join
              </LuxuryButton>
            </div>
            {joined && (
              <p role="status" className="text-sm font-semibold text-velmora-champagne">
                Welcome to Velmora. Your first-order note has been reserved.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
