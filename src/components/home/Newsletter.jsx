import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="py-16 md:py-24 bg-gold">
      <div className="container-main">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-ink font-medium mb-4">
            Join for 10% Off
          </h2>
          <p className="font-sans text-sm md:text-base text-ink/80 mb-8">
            Subscribe for first access to new collections, styling notes, and 10% off your first
            order.
          </p>

          {status === 'success' ? (
            <div className="inline-flex items-center gap-2 bg-cream px-6 py-4 text-ink font-sans text-sm font-medium">
              <Check size={18} className="text-gold-dark" />
              Thank you — your code is on its way.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3.5 bg-cream text-ink placeholder:text-stone font-sans text-sm focus:outline-none focus:ring-1 focus:ring-ink"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-ink text-cream px-6 py-3.5 font-sans text-xs uppercase tracking-widest font-semibold hover:bg-ink-soft transition-colors"
              >
                Subscribe
                <ArrowRight size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
