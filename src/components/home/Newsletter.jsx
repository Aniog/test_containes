import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | success | error
  const [error, setError] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.')
      setStatus('error')
      return
    }
    setError('')
    setStatus('success')
    setEmail('')
    window.setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section
      id="newsletter-section"
      className="py-20 md:py-28 bg-espresso text-cream relative overflow-hidden"
    >
      {/* Soft gold radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at 20% 30%, rgba(176,138,74,0.25) 0%, transparent 60%)',
        }}
      />

      <div className="container-x relative">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow-gold mb-4">Stay close</p>
          <h2
            id="newsletter-title"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.05]"
            style={{ fontWeight: 400 }}
          >
            Join for <span className="italic text-gold-soft">10% off</span>
            <br className="hidden sm:block" />
            your first order.
          </h2>
          <p
            id="newsletter-subtitle"
            className="mt-5 text-cream/70 max-w-md mx-auto leading-relaxed"
          >
            New collections, behind-the-scenes from the atelier, and the
            occasional first-look. No spam, ever.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-2 max-w-md mx-auto"
            aria-label="Newsletter sign up"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-transparent border border-line-dark px-4 py-3.5 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold-soft transition-colors duration-300"
              autoComplete="email"
            />
            <button
              type="submit"
              className="btn-primary-on-dark group whitespace-nowrap"
            >
              {status === 'success' ? (
                <>
                  <Check className="w-4 h-4 mr-2" strokeWidth={1.5} />
                  Subscribed
                </>
              ) : (
                <>
                  Subscribe
                  <ArrowRight
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </>
              )}
            </button>
          </form>

          {status === 'error' && error && (
            <p role="alert" className="mt-3 text-xs text-gold-soft">
              {error}
            </p>
          )}

          <p className="mt-5 text-[11px] text-cream/50">
            By subscribing you agree to our privacy policy.
          </p>
        </div>
      </div>
    </section>
  )
}
