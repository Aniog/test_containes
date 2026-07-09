import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('submitting')
    // Simulate subscription
    setTimeout(() => {
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 4000)
    }, 800)
  }

  return (
    <section className="bg-gold py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
            Join for 10% Off
          </h2>
          <p className="text-gold-200 text-sm md:text-base mb-8">
            Be the first to know about new collections, exclusive drops, and behind-the-scenes stories.
          </p>

          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 h-12 px-4 bg-white/15 border border-white/30 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/60 transition-colors rounded-none"
            />
            <Button
              type="submit"
              disabled={status === 'submitting'}
              className="bg-white text-gold hover:bg-cream-50 border-0 h-12 px-6 rounded-none"
            >
              {status === 'submitting' ? (
                'Sending...'
              ) : (
                <ArrowRight className="w-5 h-5" />
              )}
            </Button>
          </form>

          {status === 'success' && (
            <p className="text-white/80 text-sm mt-4">Thanks for subscribing! Check your inbox for 10% off.</p>
          )}
        </div>
      </div>
    </section>
  )
}