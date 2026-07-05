import { useState } from 'react'
import { toast } from 'sonner'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address.')
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setEmail('')
      toast.success('Welcome! Check your inbox for 10% off.')
    }, 800)
  }

  return (
    <section className="py-14 md:py-20 bg-gold-500">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-white tracking-wide">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-2 text-sm text-white/80">
          Be the first to know about new arrivals, exclusive offers, and styling tips.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 text-sm bg-white/10 text-white placeholder-white/60 border border-white/30 rounded-sm focus:outline-none focus:border-white transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-white text-gold-700 text-xs tracking-[0.2em] uppercase font-medium rounded-sm hover:bg-cream transition-colors disabled:opacity-60"
          >
            {loading ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  )
}
