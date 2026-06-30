import { useState } from 'react'
import Button from '@/components/ui/Button'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim() || !email.includes('@')) return
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section className="bg-velmora-gold py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl tracking-wide text-velmora-base sm:text-4xl">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-velmora-base/80">
          Subscribe for early access to new collections, styling tips, and a
          welcome discount on your first order.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 border-b-2 border-velmora-base/30 bg-transparent px-4 py-3 text-velmora-base placeholder:text-velmora-base/50 focus:border-velmora-base focus:outline-none"
          />
          <Button type="submit" variant="dark" size="md">
            Subscribe
          </Button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm font-medium text-velmora-base">
            Thank you. Your welcome code is on its way.
          </p>
        )}
      </div>
    </section>
  )
}
