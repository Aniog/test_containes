import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="bg-blush py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
          Join the List
        </p>
        <h2 className="mt-4 font-serif text-3xl font-light md:text-4xl">
          For 10% Off Your First Order
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-warm-gray">
          Be the first to know about new arrivals, styling notes, and
          subscriber-only moments.
        </p>

        {submitted ? (
          <div className="mt-8 flex items-center justify-center gap-2 text-gold">
            <Check className="h-5 w-5" />
            <span className="text-sm font-medium">
              Welcome to Velmora. Check your inbox.
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 border border-hairline bg-white px-5 py-4 text-sm text-espresso placeholder:text-warm-gray/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-espresso px-8 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-gold"
            >
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
