import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | success | error

  const onSubmit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="bg-champagne py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold-deep mb-3">Join Velmora</p>
        <h2 className="font-serif text-3xl md:text-5xl text-ink leading-tight">
          10% off your first order
        </h2>
        <p className="mt-4 text-sm md:text-base text-ink/70 leading-relaxed">
          Be the first to know about new collections, private sales, and styling notes.
          Enjoy 10% off your first order when you subscribe.
        </p>

        <form onSubmit={onSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setStatus('idle')
            }}
            placeholder="Your email address"
            aria-label="Email address"
            className="flex-1 border-b border-ink/30 bg-transparent px-1 py-3 text-sm text-ink placeholder:text-ink/50 focus:border-ink focus:outline-none transition-colors"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-ink text-cream uppercase tracking-widest3 text-xs font-medium px-8 py-4 hover:bg-gold-deep transition-colors"
          >
            Subscribe
            <ArrowRight size={15} strokeWidth={1.5} />
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm text-ink/80">Welcome to Velmora. Check your inbox for your code.</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-sm text-gold-deep">Please enter a valid email address.</p>
        )}
      </div>
    </section>
  )
}
