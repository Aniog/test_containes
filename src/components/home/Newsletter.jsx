import { useState } from 'react'

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
    <section className="bg-velmora-parchment px-4 pb-16 text-velmora-ink sm:px-6 md:pb-24 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-gold text-velmora-ink shadow-lift">
        <div className="grid gap-8 px-6 py-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-12 lg:px-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-espresso">Private list</p>
            <h2 className="mt-3 font-serifDisplay text-5xl font-medium leading-tight text-velmora-ink md:text-6xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-espresso">
              Receive early access to drops, care notes, and quietly beautiful gifting edits.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3" aria-label="Newsletter sign up">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                className="min-h-14 flex-1 border border-velmora-ink/20 bg-velmora-pearl px-4 text-sm text-velmora-ink placeholder:text-velmora-bark focus:border-velmora-ink focus:outline-none"
                aria-label="Email address"
                required
              />
              <button
                type="submit"
                className="min-h-14 bg-velmora-ink px-6 text-sm font-bold uppercase tracking-[0.22em] text-velmora-pearl transition hover:bg-velmora-espresso"
              >
                Join
              </button>
            </div>
            {submitted && (
              <p role="status" className="text-sm font-medium text-velmora-ink">
                Welcome to Velmora. Your code will arrive shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
