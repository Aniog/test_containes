import { useState } from 'react'
import { Button } from '@/components/ui/Button'

function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) {
      return
    }
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section id="newsletter" className="bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-amber-500 px-6 py-12 text-stone-950 shadow-xl shadow-amber-500/20 sm:px-10 sm:py-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-800">Velmora Journal</p>
            <h2 className="mt-4 font-serif-display text-4xl leading-tight sm:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-4 text-base leading-7 text-stone-800">
              Be first to discover new drops, gifting edits, and styling notes from the Velmora world.
            </p>
          </div>

          <form className="mt-8 flex flex-col gap-4 md:flex-row" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              className="h-12 flex-1 rounded-full border border-stone-900/20 bg-stone-50 px-5 text-sm text-stone-950 outline-none transition placeholder:text-stone-500 focus:border-stone-950"
              aria-label="Email address"
            />
            <Button type="submit" variant="dark" size="lg" className="md:min-w-[220px]">
              Join Now
            </Button>
          </form>

          <p className="mt-4 text-sm text-stone-800">
            {submitted
              ? 'You are in. Your welcome note is on its way.'
              : 'No noise, only polished updates and considered product launches.'}
          </p>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
