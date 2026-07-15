import { useState } from 'react'
import { toast } from 'sonner'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [ref, visible] = useScrollAnimation(0.2)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      toast.success('Welcome to Velmora! Check your inbox for 10% off.')
      setEmail('')
    }
  }

  return (
    <section ref={ref} className={`py-20 md:py-24 bg-accent animate-fade-up ${visible ? 'visible' : ''}`}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="serif-heading text-3xl md:text-4xl text-white mb-4">
          Join for 10% Off
        </h2>
        <p className="text-white/80 text-base mb-8">
          Subscribe to our newsletter for exclusive offers, styling tips, and early access to new collections.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-5 py-3 bg-white/10 border border-white/30 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/60 transition-colors"
            required
          />
          <button
            type="submit"
            className="bg-white text-accent px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-white/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
        <p className="text-white/50 text-xs mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
