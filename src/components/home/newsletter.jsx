import { useState } from 'react'
import { ArrowRight, MailCheck } from 'lucide-react'
import Button from '@/components/ui/button'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')
  const [error, setError] = useState('')

  const submit = (event) => {
    event.preventDefault()
    const value = email.trim()
    if (!/^\S+@\S+\.\S+$/.test(value)) {
      setError('Please enter a valid email address.')
      setState('error')
      return
    }
    setError('')
    setState('submitting')
    window.setTimeout(() => {
      setState('success')
      setEmail('')
    }, 700)
  }

  return (
    <section className="bg-ink py-16 sm:py-24" aria-label="Newsletter">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-luxe text-gold">
          The Velmora Letter
        </p>
        <h2 className="font-serif text-3xl font-medium leading-tight text-cream sm:text-4xl">
          Join for <em className="italic text-gold">10% off</em> your first order
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream/70">
          New pieces, styling notes, and early access to small-batch drops —
          about twice a month, never more.
        </p>

        {state === 'success' ? (
          <div className="mx-auto mt-9 flex max-w-md items-center justify-center gap-3 border border-gold/40 bg-gold/10 px-6 py-4">
            <MailCheck className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
            <p className="text-sm text-cream">
              Welcome to Velmora — your code <span className="font-semibold text-gold">VELMORA10</span> is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row" noValidate>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (state === 'error') setState('idle')
              }}
              placeholder="Your email address"
              className="flex-1 border border-cream/25 bg-transparent px-5 py-4 font-sans text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
            />
            <Button
              variant="gold"
              size="lg"
              type="submit"
              disabled={state === 'submitting'}
              className="shrink-0"
            >
              {state === 'submitting' ? 'Joining…' : 'Subscribe'}
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Button>
          </form>
        )}
        {state === 'error' && error && (
          <p role="alert" className="mt-3 text-xs text-gold">
            {error}
          </p>
        )}
      </div>
    </section>
  )
}
