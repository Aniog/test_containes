import { useState } from 'react'

const NewsletterSection = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <section className="section-shell py-16 sm:py-20">
      <div className="overflow-hidden rounded-[2rem] bg-gold px-6 py-10 text-pearl shadow-velvet sm:px-10 lg:px-14 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-luxe text-pearl/75">Private access</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Join for 10% off your first order</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-pearl/82 sm:text-base">
              Be first to hear about new drops, gifting edits, and softly limited restocks.
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                className="h-14 flex-1 rounded-full border border-pearl/25 bg-pearl/12 px-5 text-pearl placeholder:text-pearl/62 focus:border-pearl focus:outline-none"
                aria-label="Email address"
              />
              <button type="submit" className="inline-flex h-14 items-center justify-center rounded-full bg-pearl px-6 text-sm font-medium uppercase tracking-caps text-ink transition-colors duration-300 hover:bg-bark hover:text-pearl">
                Join now
              </button>
            </form>
            <p className="mt-4 text-sm text-pearl/80">
              {isSubmitted ? 'You’re on the list. Your welcome note is on its way.' : 'No spam — only considered updates and first access.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
