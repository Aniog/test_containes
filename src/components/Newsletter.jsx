import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Newsletter({ variant = 'accent' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim() || !email.includes('@')) return
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 3000)
  }

  const isAccent = variant === 'accent'

  return (
    <section
      className={cn(
        'py-16 md:py-20',
        isAccent ? 'bg-accent' : 'bg-velvet-secondary border-y border-cream/8'
      )}
    >
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className={cn(
              'font-serif text-3xl md:text-4xl',
              isAccent ? 'text-velvet' : 'text-cream'
            )}
          >
            Join for 10% off your first order
          </h2>
          <p
            className={cn(
              'mt-3 text-sm md:text-base',
              isAccent ? 'text-velvet/80' : 'text-warm-gray'
            )}
          >
            Be the first to know about new arrivals, limited editions, and styling notes.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={cn(
                'flex-1 px-4 py-3.5 bg-transparent border text-sm font-sans placeholder:text-current/50 focus:outline-none focus:border-current transition-colors',
                isAccent
                  ? 'border-velvet/30 text-velvet placeholder:text-velvet/50'
                  : 'border-cream/20 text-cream placeholder:text-warm-gray'
              )}
            />
            <button
              type="submit"
              disabled={status === 'success'}
              className={cn(
                'flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-sans uppercase tracking-[0.16em] font-medium transition-all',
                isAccent
                  ? 'bg-velvet text-cream hover:bg-velvet-secondary'
                  : 'bg-cream text-velvet hover:bg-ivory-dark',
                status === 'success' && 'opacity-80 cursor-default'
              )}
            >
              {status === 'success' ? (
                <>
                  <Check size={14} /> Subscribed
                </>
              ) : (
                <>
                  Subscribe <ArrowRight size={14} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
