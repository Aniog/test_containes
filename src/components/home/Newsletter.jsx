import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import useScrollReveal from '@/hooks/useScrollReveal'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const sectionRef = useScrollReveal([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 800)
  }

  return (
    <section ref={sectionRef} className="bg-brand-600">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-brand-100 text-xs uppercase tracking-widest font-sans mb-3" data-reveal>
            Newsletter
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight font-light" data-reveal>
            Join for{' '}
            <span className="font-semibold italic">10% off</span>{' '}
            your first order
          </h2>
          <p className="text-brand-100/80 text-sm md:text-base font-sans mt-4 max-w-md mx-auto leading-relaxed" data-reveal>
            Be the first to know about new collections, exclusive drops, and early access events.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto" data-reveal>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-brand-200/60 font-sans text-sm focus:outline-none focus:border-white/40 transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-6 py-3 bg-white text-brand-700 font-sans text-sm font-medium uppercase tracking-wider hover:bg-brand-50 transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                {status === 'submitting' ? 'Sending...' : 'Subscribe'}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            {status === 'success' && (
              <p className="text-brand-100 text-sm font-sans mt-3">
                Thanks for subscribing! Check your inbox for your 10% off code.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}