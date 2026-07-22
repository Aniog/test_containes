import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="bg-espresso text-ivory">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
          Join Velmora
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-tight">
          10% off your first order
        </h2>
        <p className="mt-5 text-mist/75 max-w-md mx-auto leading-relaxed">
          Be first to know about new collections, private sales, and styling
          notes. Enjoy 10% off when you join.
        </p>

        {submitted ? (
          <p className="mt-9 font-serif text-2xl text-gold">
            Welcome to Velmora. Check your inbox.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-9 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-white/25 text-ivory placeholder:text-mist/50 px-5 py-4 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-espresso text-[11px] uppercase tracking-[0.2em] px-7 py-4 hover:bg-gold-deep hover:text-ivory transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight width={14} height={14} strokeWidth={1.5} />
            </button>
          </form>
        )}
        <p className="mt-5 text-xs text-mist/45">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
