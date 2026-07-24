import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
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
    <section className="bg-velmora-gold py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-velmora-espresso/70">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-3xl font-medium text-velmora-espresso md:text-4xl">
          10% Off Your First Order
        </h2>
        <p className="mt-4 text-velmora-espresso/80">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-8 inline-flex items-center gap-2 rounded-md bg-velmora-espresso px-6 py-3 text-sm font-medium text-velmora-cream">
            <Check className="h-4 w-4" />
            Thank you. Check your inbox for your code.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
          >
            <Input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 border-velmora-espresso/20 bg-velmora-cream px-5 text-velmora-espresso placeholder:text-velmora-taupe sm:w-80"
            />
            <Button
              type="submit"
              variant="default"
              className="h-12 bg-velmora-espresso px-8 text-sm font-medium uppercase tracking-[0.12em] text-velmora-cream hover:bg-velmora-espresso-light"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
