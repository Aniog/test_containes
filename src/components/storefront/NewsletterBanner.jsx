import { useState } from 'react'

export default function NewsletterBanner() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) {
      return
    }

    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <section className="section-shell pb-20 sm:pb-24">
      <div className="overflow-hidden rounded-[2rem] bg-ink px-6 py-10 text-mist shadow-luxe sm:px-10 lg:px-14 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="eyebrow">The Velmora List</p>
            <h2 className="mt-4 font-serif text-4xl leading-none text-surface sm:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-mist/80 sm:text-lg">
              Early access to limited drops, styling notes, and gifting edits delivered with restraint.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              className="h-14 rounded-full border border-mist/30 bg-white/10 px-5 text-base text-surface outline-none placeholder:text-mist/50 focus:border-gold"
            />
            <button type="submit" className="premium-button min-h-14 px-8">
              Join now
            </button>
          </form>
        </div>

        {isSubmitted ? (
          <p className="mt-4 text-sm text-gold">Welcome to Velmora. Your welcome offer is ready.</p>
        ) : null}
      </div>
    </section>
  )
}
