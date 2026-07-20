import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

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
    <section className="bg-velmora-gold py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center text-white md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl">
          Join for 10% Off Your First Order
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm font-light leading-relaxed text-white/90">
          Be the first to see new arrivals, styling notes, and subscriber-only
          moments — delivered with care.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-xl italic">
            Welcome. Check your inbox for your gift.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center"
          >
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-white/60 text-white placeholder:text-white/70 focus:border-white sm:w-80"
            />
            <Button
              type="submit"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-velmora-gold"
            >
              Subscribe
            </Button>
          </form>
        )}

        <p className="mt-4 text-[10px] uppercase tracking-widest text-white/70">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
