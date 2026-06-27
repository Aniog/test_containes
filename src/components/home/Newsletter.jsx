import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="bg-velmora-ink py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-5 text-center md:px-8">
        <p className="text-[11px] uppercase tracking-[0.3em] text-velmora-gold">
          Join the Circle
        </p>
        <h2 className="mt-4 font-serif text-4xl text-velmora-cream md:text-5xl">
          10% Off Your First Order
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-velmora-cream/70">
          Be the first to know about new collections, private sales, and
          styling notes. Enjoy 10% off your first piece.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-xl italic text-velmora-gold">
            Welcome to Velmora. Check your inbox for your code.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 border border-velmora-cream/30 bg-transparent px-5 py-4 text-sm text-velmora-cream placeholder:text-velmora-cream/40 focus:border-velmora-gold focus:outline-none"
            />
            <button
              type="submit"
              className="bg-velmora-gold px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-velmora-gold-deep"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="mt-4 text-[10px] uppercase tracking-[0.15em] text-velmora-cream/40">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
