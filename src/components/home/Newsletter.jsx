import { useState } from 'react'
import { Check, Mail } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const value = email.trim()
    if (!/^\S+@\S+\.\S+$/.test(value)) {
      setError('Please enter a valid email address.')
      setStatus('error')
      return
    }
    setError('')
    setStatus('submitting')
    window.setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 700)
  }

  return (
    <section className="velmora-container pb-20 md:pb-28">
      <Reveal>
        <div className="relative overflow-hidden border border-velmora-gold/25 bg-velmora-surface px-6 py-16 text-center md:px-12 md:py-20">
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-velmora-gold/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-velmora-gold/10 blur-3xl" />

          <p className="eyebrow">The Velmora Circle</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-medium leading-tight text-velmora-ink md:text-5xl">
            Join for <em className="text-velmora-gold-light">10% off</em> your
            first order
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-velmora-muted">
            Early access to new drops, styling notes from the atelier, and a
            welcome treat. One beautiful email a week — never more.
          </p>

          {status === 'success' ? (
            <div className="mx-auto mt-9 flex max-w-md items-center justify-center gap-3 border border-velmora-gold/40 bg-velmora-bg/60 px-6 py-4">
              <Check className="h-4 w-4 text-velmora-gold" strokeWidth={2} />
              <p className="text-sm text-velmora-ink">
                Welcome to the circle — your code is on its way.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
              noValidate
            >
              <label className="relative flex-1">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-velmora-muted" strokeWidth={1.5} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  aria-label="Email address"
                  className="w-full border border-velmora-line bg-velmora-bg/70 py-4 pl-11 pr-4 text-sm text-velmora-ink placeholder:text-velmora-muted/70 transition-colors focus:border-velmora-gold focus:outline-none"
                />
              </label>
              <button type="submit" className="btn-gold shrink-0" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Joining…' : 'Subscribe'}
              </button>
            </form>
          )}
          {status === 'error' && error && (
            <p role="alert" className="mt-3 text-xs tracking-wide text-red-300">
              {error}
            </p>
          )}
        </div>
      </Reveal>
    </section>
  )
}
