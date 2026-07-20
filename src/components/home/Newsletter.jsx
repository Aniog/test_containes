import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim() || !email.includes('@')) return
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section className="bg-velmora-rust py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-ivory/80">
          Join the List
        </p>
        <h2 className="mt-3 font-serif text-3xl font-medium text-velmora-ivory md:text-4xl">
          10% Off Your First Order
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm font-light leading-relaxed text-velmora-ivory/90">
          Be the first to know about new arrivals, exclusive edits, and styling notes — plus enjoy
          10% off when you subscribe.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="flex-1 rounded-full border border-velmora-ivory/30 bg-velmora-ivory/10 px-5 py-3 text-sm text-velmora-ivory placeholder:text-velmora-ivory/50 focus:border-velmora-ivory focus:bg-velmora-ivory/20 focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-velmora-ivory px-6 py-3 text-xs font-semibold uppercase tracking-widest text-velmora-rust transition hover:bg-velmora-stone"
          >
            Subscribe
            <ArrowRight size={14} />
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm font-medium text-velmora-ivory">
            Welcome — your code is on its way.
          </p>
        )}
      </div>
    </section>
  )
}
