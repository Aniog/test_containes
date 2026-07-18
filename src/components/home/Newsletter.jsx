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
    <section id="journal" className="bg-gold text-ink">
      <div className="max-w-8xl mx-auto px-6 md:px-10 py-16 md:py-24 text-center">
        <p className="text-xs uppercase tracking-widest2 text-ink/70 mb-4">The Velmora List</p>
        <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
          Join for 10% off your first order
        </h2>
        <p className="mt-4 text-sm text-ink/80 max-w-md mx-auto">
          Be first to know about new collections, private sales, and styling
          notes from the studio.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-2xl text-ink">
            Thank you — check your inbox for your 10% code.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-8 max-w-md mx-auto flex items-center border-b border-ink/40 focus-within:border-ink transition-colors"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent py-3 text-ink placeholder:text-ink/50 focus:outline-none text-sm"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="text-ink hover:text-ink/60 transition-colors px-2"
            >
              <ArrowRight size={20} strokeWidth={1.5} />
            </button>
          </form>
        )}
        <p className="mt-4 text-[11px] text-ink/60">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
