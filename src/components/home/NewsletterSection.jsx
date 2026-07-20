import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <section id="newsletter" className="page-shell pb-16 md:pb-24">
      <div className="rounded-[2rem] bg-champagne px-6 py-10 text-champagneInk shadow-soft md:px-12 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow text-champagneInk/70">Private list</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-4 text-sm leading-7 text-champagneInk/80 md:text-base">
              Early access to launches, soft gifting edits, and limited seasonal
              drops — delivered with restraint.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-xl">
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                className="min-h-12 flex-1 rounded-full border border-champagneInk/20 bg-white/80 px-5 text-sm text-ink outline-none transition focus:border-champagneInk focus:bg-white"
              />
              <button type="submit" className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-medium text-white transition duration-300 ease-luxe hover:-translate-y-0.5 hover:bg-rosewood">
                Join now
              </button>
            </div>
            {isSubmitted ? (
              <p className="mt-3 text-sm text-champagneInk/90">
                Thank you. Your welcome offer is on its way.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}
