import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!email) return
    setDone(true)
    setEmail('')
  }

  return (
    <section className="py-20 md:py-28 bg-gold text-cream">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-cream/80 mb-4">
          Join the List
        </p>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
          10% off your first order
        </h2>
        <p className="mt-4 text-cream/85 max-w-md mx-auto">
          Be first to know about new collections, private sales, and styling notes.
          No spam — only beautiful things.
        </p>

        {done ? (
          <p className="mt-8 font-serif text-2xl italic">
            Thank you — welcome to Velmora.
          </p>
        ) : (
          <form
            onSubmit={submit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-cream/15 border border-cream/40 text-cream placeholder-cream/60 px-5 py-4 text-sm focus:outline-none focus:border-cream transition-colors"
            />
            <button
              type="submit"
              className="bg-ink text-cream text-[11px] uppercase tracking-[0.25em] px-8 py-4 hover:bg-cream hover:text-ink transition-colors flex items-center justify-center gap-2"
            >
              Subscribe <ArrowRight width={14} height={14} />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
