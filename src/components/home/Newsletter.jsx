import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-sm bg-accent px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-white/80">
            Join the Inner Circle
          </p>
          <h2 className="mx-auto max-w-2xl font-serif text-3xl sm:text-4xl lg:text-5xl">
            Be the First to Know
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-white/80">
            Subscribe for exclusive launches, styling notes, and 10% off your first order.
          </p>

          {submitted ? (
            <div className="mt-8 inline-flex items-center gap-2 rounded-md bg-white/20 px-6 py-3 text-sm font-medium">
              <Check className="h-4 w-4" />
              Welcome to Velmora — check your inbox.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 border-white/30 bg-white/10 text-white placeholder:text-white/60 focus-visible:ring-white"
              />
              <Button
                type="submit"
                variant="secondary"
                className="h-12 bg-white text-foreground hover:bg-white/90"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
