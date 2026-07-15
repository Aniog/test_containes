import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="bg-champagne py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
          Join for 10% off your first order
        </h2>
        <p className="mt-4 text-sm text-ink/80">
          Be the first to know about new collections, private sales, and
          styling notes. No noise — only the good things.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-xl text-ink">
            Thank you. Check your inbox for your 10% code.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-cream/90 px-5 py-4 text-sm text-ink placeholder:text-taupe focus:outline-none focus:ring-2 focus:ring-ink/30"
            />
            <button
              type="submit"
              className="bg-ink text-cream text-xs uppercase tracking-widest2 px-8 py-4 hover:bg-espresso transition-colors flex items-center justify-center gap-2"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
        <p className="mt-4 text-xs text-ink/70">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
