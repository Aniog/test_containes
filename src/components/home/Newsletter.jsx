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
    <section className="bg-velmora-ivory px-5 py-16 text-velmora-ivory sm:px-8 md:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-t-[12rem] bg-velmora-moss px-6 py-16 text-center shadow-editorial sm:px-10 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-velmora-champagne">Velmora private list</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-serif text-5xl font-medium leading-none text-velmora-ivory md:text-7xl">
          Join for 10% off your first order
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-velmora-ivory/78">
          Receive early access to small drops, care notes, and gifting edits. No noise, only glow.
        </p>
        <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-full bg-velmora-ivory p-2 text-velmora-espresso sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            placeholder="Email address"
            className="min-h-12 flex-1 rounded-full border border-transparent bg-transparent px-5 text-sm text-velmora-espresso placeholder:text-velmora-cocoa/55 focus:border-velmora-champagne focus:outline-none"
          />
          <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-velmora-espresso px-6 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ivory transition-colors hover:bg-velmora-champagne hover:text-velmora-espresso">
            Sign Up <ArrowRight className="h-4 w-4" />
          </button>
        </form>
        {submitted && <p className="mt-4 text-sm font-medium text-velmora-ivory" role="status">Welcome to Velmora. Your first-order note is on its way.</p>}
      </div>
    </section>
  )
}
