import React, { useState } from 'react'
import { ArrowRight, Check, Mail } from 'lucide-react'
import Reveal from '@/components/Reveal'

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
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 700)
  }

  return (
    <section className="bg-gold">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Mail className="mx-auto h-6 w-6 text-inkonaccent/70" strokeWidth={1.5} />
          <h2 className="mt-5 font-serif text-4xl font-light text-inkonaccent md:text-5xl">
            Join for <span className="italic">10% off</span> your first order
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-inkonaccent/80 md:text-base">
            Early access to new drops, private offers and stories from the
            atelier. Once a week, never more.
          </p>

          {status === 'success' ? (
            <p className="mx-auto mt-8 flex w-fit items-center gap-2 border border-inkonaccent/30 px-6 py-4 text-xs font-semibold uppercase tracking-widest2 text-inkonaccent">
              <Check className="h-4 w-4" />
              Welcome to Velmora — check your inbox
            </p>
          ) : (
            <form onSubmit={onSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="h-13 flex-1 border border-inkonaccent/40 bg-transparent px-5 py-4 text-sm text-inkonaccent placeholder:text-inkonaccent/60 focus:border-inkonaccent focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="group flex items-center justify-center gap-2 bg-inkonaccent px-8 py-4 text-xs font-semibold uppercase tracking-widest2 text-goldlight transition-colors duration-300 hover:bg-ink disabled:opacity-70"
              >
                {status === 'submitting' ? 'Joining…' : 'Subscribe'}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          )}
          {status === 'error' && (
            <p role="alert" className="mt-3 text-xs font-medium tracking-wide text-inkonaccent">
              {error}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
