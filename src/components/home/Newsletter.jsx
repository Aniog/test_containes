import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="bg-charcoal-900 py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-5 text-center text-cream-100 md:px-10">
        <p className="label-uppercase mb-4 text-gold-400">The Velmora List</p>
        <h2 className="heading-display text-3xl md:text-5xl">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-4 text-cream-200/80">
          Be the first to shop new arrivals, private sales, and styling stories.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 border-b border-cream-100/30 bg-transparent px-1 py-3 text-sm text-cream-100 placeholder:text-cream-200/40 outline-none focus:border-gold-400"
          />
          <button
            type="submit"
            className="bg-gold-600 px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-charcoal-900 transition-colors hover:bg-gold-500"
          >
            Subscribe
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm text-gold-400">
            Thank you. Use code WELCOME10 at checkout.
          </p>
        )}
      </div>
    </section>
  )
}
