import { useState } from 'react'
import AccentButton from '@/components/common/AccentButton'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setJoined(true)
    setEmail('')
  }

  return (
    <section className="bg-velmora-ivory px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-velmora-bronze px-6 py-12 text-white shadow-velvet sm:px-10 lg:px-16 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">The first edit</p>
            <h2 className="font-serif text-4xl font-medium leading-tight md:text-6xl">Join for 10% off your first order</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">Receive new drops, styling notes, and private gifting reminders from Velmora.</p>
          </div>
          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/15 bg-white/8 p-3 backdrop-blur">
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input id="newsletter-email" type="email" required placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} className="min-h-14 flex-1 rounded-full border border-white/20 bg-white px-5 text-sm text-velmora-espresso placeholder:text-velmora-umber focus:border-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-champagne" />
              <AccentButton type="submit" className="sm:min-w-36">Join</AccentButton>
            </div>
            {joined && <p className="px-3 pt-3 text-sm font-medium text-velmora-champagne" role="status">Welcome to Velmora. Your first-order note is on its way.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
