import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="bg-champagne text-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-ivory/80 mb-5">
          Join the List
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light max-w-2xl mx-auto leading-tight">
          Enjoy 10% off your first order
        </h2>
        <p className="mt-4 text-ivory/85 max-w-md mx-auto text-sm md:text-base">
          Be first to know about new collections, private sales, and styling
          notes from the studio.
        </p>

        {submitted ? (
          <p className="mt-9 font-serif text-2xl">
            Welcome to Velmora. Check your inbox.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-9 flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-ivory/15 border border-ivory/40 text-ivory placeholder-ivory/60 px-5 py-4 text-sm focus:outline-none focus:border-ivory transition-colors"
            />
            <button
              type="submit"
              className="bg-espresso text-ivory px-7 py-4 text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-ink transition-colors duration-300"
            >
              Subscribe
              <ArrowRight width={14} height={14} />
            </button>
          </form>
        )}
        <p className="mt-4 text-[11px] text-ivory/70">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
