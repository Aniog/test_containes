import { useState } from 'react'
import Button from '@/components/ui/Button'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submit = (event) => {
    event.preventDefault()
    setMessage(email ? 'You are on the list. Your first-order code is VELMORA10.' : 'Enter your email to join the list.')
  }

  return (
    <section className="bg-velmora-cream px-5 py-16 text-velmora-ink md:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl overflow-hidden bg-velmora-ink p-8 text-velmora-cream shadow-glow md:p-14">
        <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne">Velmora letters</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold leading-tight text-velmora-cream md:text-6xl">Join for 10% off your first order</h2>
          </div>
          <form onSubmit={submit} className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input
                id="newsletter-email"
                className="min-h-12 flex-1 rounded-full border border-velmora-cream/20 bg-velmora-cream px-5 text-sm text-velmora-ink placeholder:text-velmora-ink/45 focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
                type="email"
                value={email}
                placeholder="Email address"
                onChange={(event) => setEmail(event.target.value)}
              />
              <Button className="bg-velmora-champagne text-velmora-ink focus:ring-velmora-cream" type="submit">Join</Button>
            </div>
            {message && <p className="text-sm text-velmora-cream/78" role="status">{message}</p>}
            <p className="text-xs leading-5 text-velmora-cream/56">No spam. Just capsule launches, care notes, and rare offers.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
