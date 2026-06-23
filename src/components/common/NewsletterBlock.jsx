import { useState } from 'react'

const NewsletterBlock = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) return

    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-hairline-light bg-surface px-6 py-10 text-ink shadow-soft sm:px-10 lg:px-14 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Join the List</p>
            <h2 className="text-balance text-4xl text-ink sm:text-5xl">Join for 10% off your first order</h2>
            <p className="max-w-xl text-sm leading-7 text-ink/70 sm:text-base">
              Receive early access to limited drops, styling notes, and thoughtful gifting edits from Velmora.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                className="h-14 flex-1 rounded-full border border-hairline-light bg-input-surface px-5 text-sm text-ink outline-none transition placeholder:text-ink/45 focus:border-accent"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="inline-flex h-14 items-center justify-center rounded-full bg-accent px-8 text-xs font-medium uppercase tracking-[0.24em] text-ink transition duration-300 hover-lift hover:brightness-105"
              >
                Join Now
              </button>
            </div>
            <p className="text-xs leading-6 text-ink/60">
              {submitted
                ? 'Thank you. Your welcome offer is ready for your next order.'
                : 'By subscribing, you agree to receive email communication from Velmora. Unsubscribe anytime.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsletterBlock
