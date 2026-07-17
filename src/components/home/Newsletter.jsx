import { useState } from 'react'
import Button from '@/components/common/Button.jsx'

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
    <section className="bg-velmora-cream px-4 pb-20 text-velmora-ink sm:px-6 sm:pb-24 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-velmora-espresso text-velmora-porcelain shadow-lift">
        <div className="grid gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-14 lg:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-champagne">Private list</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold leading-tight text-velmora-porcelain">
              Join for 10% off your first order.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-cream/78">
              Receive early collection notes, styling rituals, and access to limited gift edits.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="rounded-[1.5rem] border border-velmora-porcelain/15 bg-velmora-porcelain/8 p-4">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="h-14 flex-1 rounded-full border border-velmora-porcelain/20 bg-velmora-porcelain px-5 text-sm text-velmora-ink placeholder:text-velmora-taupe focus:border-velmora-champagne focus:outline-none"
                required
              />
              <Button type="submit" className="sm:min-w-36">Join</Button>
            </div>
            {submitted && (
              <p className="mt-3 text-sm text-velmora-champagne" role="status">
                Welcome to Velmora. Your offer has been saved.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
