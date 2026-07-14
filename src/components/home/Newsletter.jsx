import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setDone(true)
    setEmail('')
  }

  return (
    <section className="bg-ink text-ivory py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-[11px] uppercase tracking-widest2 text-champagne mb-4">
          Join the List
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-tight">
          10% off your first order
        </h2>
        <p className="mt-4 text-ivory/70 text-base leading-relaxed">
          Be first to know about new collections, private sales, and styling
          notes. No noise — just the good stuff.
        </p>

        {done ? (
          <p className="mt-8 font-serif text-2xl text-champagne italic">
            Welcome to Velmora. Check your inbox.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-ivory/30 text-ivory placeholder:text-ivory/40 px-5 py-4 text-sm focus:outline-none focus:border-champagne transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-medium uppercase tracking-widest2 bg-champagne text-ink hover:bg-gold transition-colors duration-300"
            >
              Subscribe <ArrowRight size={14} />
            </button>
          </form>
        )}
        <p className="mt-4 text-xs text-ivory/40">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
