import { useState } from 'react'
import { Check, Mail } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const value = email.trim()
    if (!/^\S+@\S+\.\S+$/.test(value)) {
      setError('Please enter a valid email address')
      setStatus('error')
      return
    }
    setError('')
    setStatus('submitting')
    window.setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 650)
  }

  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-24">
        <div className="reveal">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-soft">
            The Velmora Circle
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-cream md:text-5xl">
            Join for 10% Off Your First Order
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream/60 md:text-base">
            New pieces, private offers and styling notes — sent quietly, never often.
          </p>

          {status === 'success' ? (
            <div className="mx-auto mt-9 flex max-w-md items-center justify-center gap-3 border border-gold-soft/40 bg-gold-soft/10 px-6 py-4">
              <Check className="h-5 w-5 text-gold-soft" strokeWidth={1.5} />
              <p className="text-sm text-cream">
                Welcome to the circle — your code <span className="font-semibold text-gold-soft">VELMORA10</span> is on its way.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row" noValidate>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <div className="relative flex-1">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cream/40" strokeWidth={1.5} />
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="h-13 w-full border border-cream/25 bg-transparent py-4 pl-11 pr-4 text-sm text-cream placeholder:text-cream/40 transition-colors focus:border-gold-soft focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex h-13 items-center justify-center bg-gold-deep px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold disabled:opacity-60"
              >
                {status === 'submitting' ? 'Joining…' : 'Subscribe'}
              </button>
            </form>
          )}
          {status === 'error' && error && (
            <p className="mt-3 text-xs text-gold-soft" role="alert">{error}</p>
          )}
        </div>
      </div>
    </section>
  )
}
