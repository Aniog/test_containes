import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section className="py-16 md:py-24 bg-velmora-gold">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-velmora-dark/70 mb-3">Newsletter</p>
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-dark mb-4">
            Join for 10% Off
          </h2>
          <p className="font-sans text-base text-velmora-dark/80 mb-8">
            Subscribe for exclusive early access, styling notes, and 10% off your first order.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 bg-velmora-cream text-velmora-dark placeholder:text-velmora-muted text-sm focus:outline-none focus:ring-2 focus:ring-velmora-dark/20"
            />
            <Button type="submit" variant="outline" className="border-velmora-dark whitespace-nowrap">
              Subscribe
            </Button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-sm text-velmora-dark font-medium">
              Thank you. Your discount code is on its way.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
