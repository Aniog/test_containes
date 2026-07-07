import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section className="bg-gold py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-sans text-xs uppercase tracking-[0.2em] text-espresso/70">
            Insider Access
          </p>
          <h2 className="font-serif text-3xl text-espresso md:text-4xl">
            Join for 10% Off Your First Order
          </h2>
          <p className="mt-4 text-espresso/80">
            Be the first to know about new arrivals, exclusive edits, and
            styling inspiration.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="h-12 flex-1 max-w-sm border border-espresso/20 bg-cream px-4 font-sans text-sm text-espresso placeholder:text-taupe/70 focus:border-espresso focus:outline-none"
            />
            <Button type="submit" variant="dark" size="md">
              Subscribe
            </Button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-sm font-medium text-espresso">
              Thank you. Your code WELCOME10 is on its way.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
