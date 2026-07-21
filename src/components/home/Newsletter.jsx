import { useState } from 'react'
import { createNewsletterSignup } from '@/api/newsletter'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setMessage('')

    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('submitting')
    try {
      await createNewsletterSignup(email.trim())
      setStatus('success')
      setMessage('Welcome to Velmora. Your 10% note is on its way.')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage(error.message || 'Signup failed. Please try again.')
    }
  }

  return (
    <section className="bg-velmora-cream px-5 pb-16 text-velmora-obsidian md:px-10 md:pb-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-velmora-espresso shadow-editorial">
        <div className="grid gap-8 px-6 py-12 text-velmora-cream md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-12 lg:px-16">
          <div>
            <p className="font-sansBody text-xs font-bold uppercase tracking-nav text-velmora-gold">The private list</p>
            <h2 className="mt-3 font-serifDisplay text-5xl leading-none md:text-7xl">Join for 10% off your first order.</h2>
            <p className="mt-5 max-w-xl font-sansBody text-sm leading-7 text-velmora-cream/75">
              Receive early access to new drops, gifting edits, and styling notes written with restraint.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="rounded-[1.5rem] border border-velmora-cream/10 bg-velmora-obsidian/40 p-4" aria-busy={status === 'submitting'}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="min-h-14 flex-1 rounded-full border border-velmora-cream/10 bg-velmora-cream px-5 font-sansBody text-sm text-velmora-obsidian placeholder:text-velmora-muted focus:border-velmora-gold focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="rounded-full bg-velmora-gold px-7 py-4 font-sansBody text-xs font-extrabold uppercase tracking-nav text-velmora-obsidian transition hover:bg-velmora-cream disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'submitting' ? 'Joining' : 'Join'}
              </button>
            </div>
            {message && (
              <p className={`mt-4 font-sansBody text-sm ${status === 'error' ? 'text-red-200' : 'text-velmora-gold'}`} role={status === 'error' ? 'alert' : 'status'}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
