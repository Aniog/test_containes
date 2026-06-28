import { useState } from 'react'
import Button from '@/components/ui/Button'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="px-5 pb-16 sm:px-8 lg:px-12 lg:pb-24">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-velmora-ink px-6 py-10 text-velmora-ivory shadow-velmora-card sm:px-10 lg:px-14 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-brand text-velmora-gold-soft">Newsletter</p>
            <h2 className="font-display text-5xl leading-none sm:text-6xl">
              Join for 10% off your first order
            </h2>
            <p className="max-w-lg text-base leading-8 text-velmora-ivory/78">
              Receive first access to new drops, gifting edits, and styling notes from Velmora.
            </p>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault()
              if (!email.trim()) return
              setSubmitted(true)
              setEmail('')
            }}
            className="space-y-3"
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                className="h-14 flex-1 rounded-full border border-white/15 bg-white/8 px-5 text-sm text-velmora-ivory outline-none transition placeholder:text-velmora-ivory/50 focus:border-velmora-gold"
              />
              <Button type="submit" size="lg">
                Join Velmora
              </Button>
            </div>
            <p className="text-sm text-velmora-ivory/68">
              {submitted
                ? 'Thank you. Your welcome offer is on its way.'
                : 'By subscribing, you agree to receive occasional editorial emails and product updates.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
