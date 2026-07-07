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
    <section id="newsletter" className="section-shell bg-porcelain">
      <div className="container-shell">
        <div className="rounded-[2rem] bg-obsidian px-6 py-12 text-porcelain shadow-2xl shadow-obsidian/10 sm:px-10 lg:px-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="space-y-4">
              <p className="eyebrow text-champagne">Newsletter</p>
              <h2 className="font-serif text-4xl leading-none text-porcelain sm:text-5xl">
                Join for 10% off your first order
              </h2>
              <p className="max-w-lg text-base leading-7 text-porcelain/75">
                Early access to new drops, thoughtful gifting edits, and styling notes delivered with restraint.
              </p>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email address"
                  className="input-shell flex-1 border-porcelain/20 bg-porcelain/10 text-porcelain placeholder:text-porcelain/50 focus:border-champagne"
                  aria-label="Email address"
                />
                <button type="submit" className="premium-button sm:min-w-[12rem]">
                  Join Now
                </button>
              </div>
              <p className="text-sm text-porcelain/68">
                {isSubmitted
                  ? 'You are in. Your welcome offer is on its way.'
                  : 'By signing up, you agree to receive occasional product and editorial updates.'}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
