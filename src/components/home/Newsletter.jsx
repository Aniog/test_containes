import { useState } from 'react'
import { submitNewsletterSignup } from '@/api/newsletter'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    const trimmedEmail = email.trim()
    if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('submitting')
    setMessage('')

    try {
      await submitNewsletterSignup(trimmedEmail)
      setEmail('')
      setStatus('success')
      setMessage('Welcome to Velmora. Your first-order note is on its way.')
    } catch (error) {
      setStatus('error')
      setMessage(error.message || 'We could not save your email. Please try again.')
    }
  }

  return (
    <section className="bg-velmora-cream px-5 pb-16 text-velmora-ink sm:px-8 md:pb-24 lg:px-12">
      <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-cocoa text-velmora-cream shadow-soft">
        <div className="grid items-center gap-8 px-6 py-12 md:grid-cols-[1fr_0.9fr] md:px-12 lg:px-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-velmora-champagne">Velmora Private List</p>
            <h2 className="font-serif text-4xl font-medium leading-tight text-velmora-cream sm:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-cream/76">
              Receive styling notes, early collection access, and quiet gifting reminders. No clutter, just considered sparkle.
            </p>
          </div>
          <form onSubmit={onSubmit} className="text-velmora-cream" aria-busy={status === 'submitting'}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="min-h-14 flex-1 rounded-full border border-velmora-cream/20 bg-velmora-ink/25 px-5 text-sm text-velmora-cream placeholder:text-velmora-cream/55 outline-none transition focus:border-velmora-champagne"
                required
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="min-h-14 rounded-full bg-velmora-champagne px-7 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-ink transition hover:bg-velmora-cream disabled:cursor-wait disabled:opacity-70"
              >
                {status === 'submitting' ? 'Joining…' : 'Join'}
              </button>
            </div>
            {message && (
              <p className={`mt-4 text-sm ${status === 'error' ? 'text-velmora-blush' : 'text-velmora-cream'}`} role={status === 'error' ? 'alert' : 'status'}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
