import { useState } from 'react'

const NewsletterSection = () => {
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
    <section className="page-shell py-16 md:py-24" id="newsletter">
      <div className="rounded-[2.5rem] bg-velvet px-6 py-12 text-center text-porcelain shadow-soft sm:px-10 lg:px-16 lg:py-16">
        <p className="text-xs uppercase tracking-[0.28em] text-amber-300">Private access</p>
        <h2 className="mt-4 font-editorial text-5xl leading-none text-white sm:text-6xl">
          Join for 10% off your first order
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/80">
          Be first to see limited edits, gifting launches, and soft-release bestsellers.
        </p>

        <form
          className="mx-auto mt-8 flex max-w-2xl flex-col gap-4 sm:flex-row"
          onSubmit={handleSubmit}
        >
          <input
            className="field-input h-14 flex-1 border-white/10 bg-white/95 text-velvet placeholder:text-truffle"
            placeholder="Email address"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button className="btn-primary h-14 justify-center px-8" type="submit">
            Join Velmora
          </button>
        </form>

        {isSubmitted ? (
          <p className="mt-4 text-sm text-white/80">
            You’re in — your welcome offer is on its way.
          </p>
        ) : null}
      </div>
    </section>
  )
}

export default NewsletterSection
