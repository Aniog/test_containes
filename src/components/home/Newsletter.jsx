import { useState } from 'react'
import { submitNewsletterSignup } from '@/api/newsletter.js'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const trimmed = email.trim()
    if (!/^\S+@\S+\.\S+$/.test(trimmed)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('submitting')
    setMessage('')
    try {
      await submitNewsletterSignup(trimmed)
      setStatus('success')
      setMessage('Welcome to Velmora. Your 10% code is on its way.')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage(error.message || 'Unable to join right now. Please try again.')
    }
  }

  return (
    <section className="bg-velmora-ivory px-5 pb-16 text-velmora-ink md:px-8 md:pb-24">
      <div className="mx-auto max-w-7xl bg-velmora-blush px-7 py-12 text-velmora-ink shadow-soft md:px-14 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-ivory">Velmora private list</p>
            <h2 className="mt-4 font-serif text-5xl leading-none md:text-6xl">Join for 10% off your first order</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-ink/80">
              Receive early access to new edits, gifting notes, and care rituals for keeping your gold pieces luminous.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-[1fr_auto]" aria-busy={status === 'submitting'}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              className="min-h-14 rounded-full border border-velmora-ivory/70 bg-velmora-ivory px-6 text-sm text-velmora-ink placeholder:text-velmora-bronze/75 outline-none transition focus:border-velmora-ink"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="min-h-14 rounded-full bg-velmora-ink px-8 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ivory transition hover:bg-velmora-gold hover:text-velmora-ink disabled:cursor-wait disabled:opacity-70"
            >
              {status === 'submitting' ? 'Joining…' : 'Join'}
            </button>
            {message && (
              <p className={`sm:col-span-2 text-sm ${status === 'error' ? 'text-velmora-ink' : 'text-velmora-ink'}`} role={status === 'error' ? 'alert' : 'status'}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
