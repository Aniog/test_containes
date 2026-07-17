import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1000)
  }

  return (
    <section className="bg-stone-900 py-16 sm:py-20">
      <div className="max-w-[600px] mx-auto px-4 sm:px-6 text-center">
        <p className="text-[11px] font-medium tracking-widest-2xl uppercase text-gold-light mb-4">
          Stay in Touch
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white mb-3">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-sm text-stone-400 mb-8 leading-relaxed">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-3.5 bg-stone-800 border border-stone-700 text-white text-sm placeholder:text-stone-500 focus:outline-none focus:border-gold rounded-sm transition-colors"
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="px-8 py-3.5 bg-gold text-white text-[13px] font-medium tracking-widest-xl uppercase hover:bg-gold-dark transition-colors rounded-sm disabled:opacity-60"
          >
            {status === 'submitting' ? 'Joining...' : 'Subscribe'}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm text-gold-light">
            Welcome to Velmora! Check your inbox for your 10% discount code.
          </p>
        )}

        <p className="mt-4 text-[11px] text-stone-600">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
