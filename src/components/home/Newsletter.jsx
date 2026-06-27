import { useState } from 'react'
import { Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [error, setError] = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()
    setError(null)
    if (!email.trim()) {
      setError('Please enter your email.')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setDone(true)
  }

  return (
    <section className="py-20 md:py-28 bg-ink text-ivory">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <p className="text-[11px] uppercase tracking-[0.25em] text-champagne mb-4">
          Join the Velmora Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-tight">
          10% off your first order
        </h2>
        <p className="mt-5 text-ivory/70 max-w-xl mx-auto leading-relaxed">
          Be first to know about new collections, private sales, and styling notes.
          Enjoy 10% off your first piece when you join.
        </p>

        {done ? (
          <div className="mt-9 inline-flex items-center gap-3 text-champagne">
            <Check className="w-5 h-5" />
            <span className="font-serif text-xl italic">
              Welcome to Velmora. Check your inbox.
            </span>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-9 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              aria-label="Email address"
              className="flex-1 bg-transparent border border-ivory/30 text-ivory placeholder:text-ivory/50 px-5 py-4 text-sm outline-none focus:border-champagne transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-ivory text-[11px] uppercase tracking-[0.25em] font-medium px-8 py-4 hover:bg-gold-deep transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        {error && (
          <p className="mt-4 text-sm text-champagne/90" role="alert">
            {error}
          </p>
        )}
        <p className="mt-5 text-xs text-ivory/45">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
