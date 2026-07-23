import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const submit = (event) => {
    event.preventDefault()
    setMessage(email ? 'You are on the list. Your 10% welcome note is reserved.' : 'Enter your email to join Velmora.')
  }

  return (
    <section id="journal" className="bg-velmora-ivory px-4 pb-16 text-velmora-espresso sm:px-6 md:pb-24 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-espresso text-velmora-ivory shadow-velvet">
        <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:p-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-velmora-champagne">Velmora letters</p>
            <h2 className="mt-5 font-serif text-5xl font-medium leading-none text-velmora-pearl md:text-7xl">Join for 10% off your first order</h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-velmora-ivory/75 md:text-base">Receive quiet styling notes, early access to new drops, and considered gifting reminders.</p>
          </div>
          <form onSubmit={submit} className="self-end">
            <label htmlFor="newsletter-email" className="text-xs font-bold uppercase tracking-widest text-velmora-champagne">Email address</label>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input id="newsletter-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" className="min-h-14 flex-1 border border-velmora-ivory/25 bg-velmora-pearl px-4 text-sm text-velmora-espresso placeholder:text-velmora-smoke focus:border-velmora-champagne focus:outline-none" />
              <button type="submit" className="velmora-focus inline-flex min-h-14 items-center justify-center gap-2 bg-velmora-champagne px-6 text-xs font-bold uppercase tracking-widest text-velmora-espresso transition hover:bg-velmora-ivory">Join <ArrowRight className="h-4 w-4" /></button>
            </div>
            {message && <p className="mt-3 text-sm text-velmora-ivory/80">{message}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
