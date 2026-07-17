import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) return
    setDone(true)
    setEmail('')
  }

  return (
    <section className="bg-ink text-ivory">
      <div className="mx-auto max-w-3xl px-6 md:px-10 py-20 md:py-28 text-center">
        <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold-soft mb-4">
          Join the Velmora Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-tight">
          10% Off Your First Order
        </h2>
        <p className="mt-5 text-base text-ivory/70 font-light max-w-xl mx-auto">
          Be first to know about new collections, private sales, and styling notes. No spam, only beauty.
        </p>

        {done ? (
          <p className="mt-10 font-serif text-2xl text-gold-soft italic">
            Welcome to Velmora. Check your inbox for your code.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-10 flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-ivory/30 px-5 py-4 text-sm text-ivory placeholder:text-ivory/40 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-7 py-4 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-gold-deep hover:text-ivory transition-colors"
            >
              Subscribe <ArrowRight width={14} height={14} strokeWidth={1.5} />
            </button>
          </form>
        )}
        <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-ivory/40">
          By subscribing you agree to our Privacy Policy
        </p>
      </div>
    </section>
  )
}
