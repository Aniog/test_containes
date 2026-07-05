import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section className="py-16 md:py-24 bg-espresso text-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-sans uppercase tracking-ui text-gold mb-3">
          Join the List
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium">
          10% Off Your First Order
        </h2>
        <p className="mt-4 text-sm md:text-base font-light text-cream/80">
          Be the first to know about new collections, exclusive offers, and
          styling notes.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3.5 bg-ivory border border-cream/30 text-espresso placeholder:text-taupe text-sm focus:border-gold focus:ring-1 focus:ring-gold"
          />
          <button
            type="submit"
            className="px-6 py-3.5 bg-gold text-cream uppercase text-xs tracking-ui font-medium hover:bg-gold-light transition-colors flex items-center justify-center gap-2"
          >
            Subscribe
            <ArrowRight size={14} strokeWidth={1.5} />
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm text-gold">Welcome to Velmora.</p>
        )}
      </div>
    </section>
  )
}
