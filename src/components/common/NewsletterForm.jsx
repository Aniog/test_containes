import { useState } from 'react'

const NewsletterForm = () => {
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
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 sm:flex-row">
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Your email address"
        className="h-12 flex-1 rounded-full border border-ivory/30 bg-ivory px-5 text-sm text-ink outline-none ring-0 placeholder:text-muted focus:border-bronze"
      />
      <button
        type="submit"
        className="h-12 rounded-full border border-ink bg-ink px-6 text-sm font-medium uppercase tracking-[0.18em] text-ivory transition hover:bg-transparent hover:text-ink"
      >
        Join Now
      </button>
      <p className="text-sm text-ink/80 sm:basis-full">
        {submitted
          ? 'Thank you. Your welcome offer is ready for checkout.'
          : 'By subscribing, you agree to receive occasional product stories and collection updates.'}
      </p>
    </form>
  )
}

export default NewsletterForm
