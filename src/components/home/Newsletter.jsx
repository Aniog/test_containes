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
    <section className="py-20 md:py-28 bg-espresso text-ivory">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold-soft mb-4">
          Join Velmora
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-tight">
          10% off your first order
        </h2>
        <p className="mt-4 text-sm text-ivory/75 max-w-md mx-auto">
          Be first to know about new collections, private sales, and styling
          notes. No spam, ever.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-2xl text-gold-soft">
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
              className="flex-1 bg-transparent border border-ivory/30 text-ivory placeholder:text-ivory/50 px-5 py-4 text-sm focus:outline-none focus:border-gold"
            />
            <button
              type="submit"
              className="bg-gold text-ivory text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-gold-deep transition-colors flex items-center justify-center gap-2"
            >
              Subscribe <ArrowRight size={14} />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
