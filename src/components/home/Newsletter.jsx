import { useState } from 'react'
import { Mail, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <section className="py-20 lg:py-28 bg-ivory-50">
      <div className="container-x">
        <div className="relative overflow-hidden bg-gradient-to-br from-gold-400 via-gold-300 to-gold-200 text-ink-900">
          <div className="absolute inset-0 opacity-30 mix-blend-multiply">
            <svg viewBox="0 0 600 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
              <defs>
                <radialGradient id="nb1" cx="20%" cy="30%" r="60%">
                  <stop offset="0%" stopColor="#F4E1B0" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#B68B4F" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="600" height="400" fill="url(#nb1)" />
            </svg>
          </div>
          <div className="relative px-6 sm:px-10 lg:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] uppercase tracking-[0.22em] text-ink-700">
                Join the list
              </span>
              <h2 className="mt-3 font-serif text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.04] tracking-[-0.01em] text-ink-900 text-balance">
                Get 10% off your <em className="italic font-light">first order.</em>
              </h2>
              <p className="mt-4 text-[15px] text-ink-700 max-w-[460px]">
                Early access to new collections, studio notes, and the
                occasional studio sale. No noise, ever.
              </p>
            </div>
            <div className="lg:col-span-5">
              <form onSubmit={handleSubmit} className="bg-ivory-50/90 backdrop-blur-sm p-2 flex items-center">
                <div className="pl-4 pr-2 text-ink-700">
                  <Mail className="w-4 h-4" strokeWidth={1.4} />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="flex-1 bg-transparent px-2 py-4 text-[14px] text-ink-900 placeholder:text-ink-500 focus:outline-none"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className={cn(
                    'inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-4 text-[11px] uppercase tracking-[0.22em] transition-colors',
                    submitted
                      ? 'bg-ink-700 text-ivory-50'
                      : 'bg-ink-900 text-ivory-50 hover:bg-ink-700',
                  )}
                  disabled={submitted}
                >
                  {submitted ? (
                    <>
                      <Check className="w-3.5 h-3.5" strokeWidth={1.6} />
                      Subscribed
                    </>
                  ) : (
                    'Join'
                  )}
                </button>
              </form>
              <p className="mt-3 text-[11px] text-ink-700/80">
                By subscribing you agree to receive marketing emails. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
