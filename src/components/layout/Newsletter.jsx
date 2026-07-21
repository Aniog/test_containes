import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Newsletter({ compact = false }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('success')
    setEmail('')
  }

  return (
    <section className={cn('bg-espresso text-cream-light', compact ? 'py-12' : 'py-16 sm:py-20')}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className={cn('font-serif text-cream-light', compact ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl')}>
          Join for 10% off your first order
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm font-light leading-relaxed text-champagne sm:text-base">
          Be the first to know about new arrivals, exclusive offers, and the stories behind our collections.
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
            className="flex-1 border-b border-champagne bg-transparent px-0 py-3 text-sm text-cream-light placeholder:text-warm-gray focus:border-gold focus:outline-none"
          />
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 bg-gold px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-cream-light transition-colors hover:bg-gold-light"
          >
            {status === 'success' ? (
              <>
                <Check className="h-4 w-4" /> Subscribed
              </>
            ) : (
              <>
                Subscribe <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm text-gold-light">Welcome to Velmora. Check your inbox for your code.</p>
        )}
      </div>
    </section>
  )
}
