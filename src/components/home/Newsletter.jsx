import { useState } from 'react'
import { Check } from 'lucide-react'
import { Reveal } from '@/hooks/useReveal'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const value = email.trim()
    if (!/^\S+@\S+\.\S+$/.test(value)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 700)
  }

  return (
    <section className="bg-espresso-deep py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-soft">The Velmora List</p>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-tight tracking-wide text-cream md:text-5xl">
            Join for 10% off your first order
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone-warm/75">
            Early access to new drops, styling notes, and stories from the atelier. No noise — one
            letter a week.
          </p>
        </Reveal>

        <Reveal delay={150}>
          {status === 'success' ? (
            <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3 border border-gold/40 bg-gold/10 px-6 py-5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold">
                <Check className="h-4 w-4 text-cream" strokeWidth={2.5} />
              </span>
              <p className="text-sm text-cream">
                Welcome to the list — your code <span className="font-semibold text-gold-soft">VELMORA10</span> is on its way.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-md" noValidate>
              <div className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full flex-1 border border-line-dark bg-transparent px-5 py-4 text-sm text-cream outline-none transition-colors placeholder:text-stone-warm/50 focus:border-gold"
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-cream transition-colors hover:bg-gold-deep disabled:opacity-70"
                >
                  {status === 'submitting' ? 'Joining…' : 'Subscribe'}
                </button>
              </div>
              {error && (
                <p role="alert" className="mt-3 text-left text-xs text-gold-soft">
                  {error}
                </p>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
