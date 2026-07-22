import { useState } from 'react'
import VelmoraButton from '@/components/common/VelmoraButton.jsx'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  return (
    <section className="px-5 pb-16 sm:px-8 md:pb-24 lg:px-12">
      <div className="mx-auto grid max-w-[1500px] gap-8 bg-velmora-taupe p-8 text-velmora-ivory md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne">Velmora Notes</p>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-tight text-velmora-ivory md:text-6xl">Join for 10% off your first order</h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-ivory/80">Receive styling notes, quiet launches, and gifting reminders — never loud, always considered.</p>
        </div>
        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault()
            if (email) setJoined(true)
          }}
        >
          <label className="sr-only" htmlFor="newsletter-email">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email address"
            className="w-full rounded-full border border-velmora-ivory/35 bg-velmora-ivory px-6 py-4 text-sm text-velmora-espresso placeholder:text-velmora-cacao/55 focus:border-velmora-gold focus:outline-none"
          />
          <VelmoraButton variant="light" className="w-full">{joined ? 'Welcome to Velmora' : 'Join the List'}</VelmoraButton>
        </form>
      </div>
    </section>
  )
}
