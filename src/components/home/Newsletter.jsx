import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('submitting')
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1000)
  }

  return (
    <section className="py-20 md:py-28 bg-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-[1440px] mx-auto section-padding relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="caption text-gold mb-4 tracking-mega-wide">Stay Connected</p>
          <h2 className="heading-lg text-cream-100 mb-4">
            Join the Velmora Family
          </h2>
          <p className="text-cream-300/80 body-sm mb-2">
            Subscribe for 10% off your first order, plus exclusive access to new arrivals, 
            styling tips, and member-only offers.
          </p>

          <div className="divider-gold mx-auto my-8" />

          {status === 'success' ? (
            <div className="animate-fade-in">
              <p className="font-serif text-xl text-gold mb-2">Welcome to Velmora!</p>
              <p className="text-cream-300/80 text-sm">
                Check your inbox for your 10% discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 bg-charcoal-600/50 border border-cream-400/15 text-cream-100 placeholder:text-cream-400/50 text-sm tracking-wide focus:outline-none focus:border-gold/50 transition-colors"
                required
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-gold flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  'Subscribing...'
                ) : (
                  <>
                    Subscribe
                    <Send className="w-4 h-4" strokeWidth={1.5} />
                  </>
                )}
              </button>
            </form>
          )}

          <p className="text-cream-400/40 text-xs mt-6">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
