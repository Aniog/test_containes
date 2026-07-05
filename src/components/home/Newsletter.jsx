import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address.')
      return
    }
    toast.success('Welcome to Velmora — your 10% off code is on its way.')
    setEmail('')
  }

  return (
    <section className="py-16 md:py-24 bg-velmora-gold">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-white/80 mb-3">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
          10% Off Your First Order
        </h2>
        <p className="text-white/80 mb-8 font-light">
          Be the first to know about new drops, styling notes, and member-only
          rewards.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 h-12 px-4 bg-white/10 border border-white/30 text-white placeholder:text-white/60 rounded-none focus:outline-none focus:border-white transition-colors"
          />
          <Button
            type="submit"
            className="h-12 px-8 bg-velmora-ink hover:bg-velmora-espresso text-white rounded-none uppercase tracking-[0.18em] text-xs font-medium"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
