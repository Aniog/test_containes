import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container-vel">
        <div className="bg-vel-cream px-6 py-14 text-center md:px-16 md:py-20">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-vel-accent">
            The Velmora List
          </p>
          <h2 className="heading-serif mb-3 text-3xl md:text-4xl">
            Join for 10% Off Your First Order
          </h2>
          <p className="mx-auto mb-8 max-w-md text-sm text-vel-muted">
            Be the first to know about new arrivals, styling notes, and
            subscriber-only exclusives.
          </p>

          {submitted ? (
            <p className="font-serif text-xl font-light text-vel-base">
              Welcome. Your code is on its way.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-md flex-col gap-3 md:flex-row"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="md:flex-1"
              />
              <Button type="submit" className="md:w-auto">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
