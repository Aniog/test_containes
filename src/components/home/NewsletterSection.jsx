import { useState } from "react"

const NewsletterSection = () => {
  const [email, setEmail] = useState("")
  const [isJoined, setIsJoined] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setIsJoined(true)
    setEmail("")
  }

  return (
    <section className="bg-ivory py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-velvet bg-glow px-6 py-12 text-ivory shadow-lift sm:px-10 lg:px-14">
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Private Access</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="font-serif text-4xl leading-tight text-ivory sm:text-5xl">
                Join for 10% off your first order
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-ivory/75">
                Receive styling notes, gifting ideas, and first access to new drops designed to become everyday signatures.
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
                placeholder="Enter your email"
                className="min-h-14 rounded-full border border-white/10 bg-white/8 px-5 text-sm text-ivory placeholder:text-ivory/45 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="min-h-14 rounded-full bg-gold px-6 text-sm font-semibold uppercase tracking-[0.22em] text-velvet transition hover:bg-rosewood hover:text-ivory"
              >
                Join now
              </button>
            </form>
          </div>
          {isJoined ? (
            <p className="mt-5 text-sm uppercase tracking-[0.22em] text-gold">
              You’re in. Your welcome offer is on its way.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
