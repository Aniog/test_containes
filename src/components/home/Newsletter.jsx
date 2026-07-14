import { useState } from 'react'

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
    <section className="bg-gold">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center md:py-24">
        <h2 className="font-serif text-4xl text-ivory md:text-5xl">
          Join for 10% Off
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ivory/85">
          Be the first to know about new collections, private sales, and
          styling notes. Enjoy 10% off your first order.
        </p>

        {done ? (
          <p className="mt-8 font-serif text-xl italic text-ivory">
            Thank you — check your inbox for your code.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 border border-ivory/40 bg-ivory/10 px-5 py-3.5 text-sm text-ivory placeholder:text-ivory/60 focus:border-ivory focus:outline-none"
            />
            <button
              type="submit"
              className="bg-espresso px-8 py-3.5 text-xs uppercase tracking-widest2 text-ivory transition-colors hover:bg-ink"
            >
              Subscribe
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
