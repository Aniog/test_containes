import { useState } from 'react'
import Button from '@/components/ui/Button'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="bg-gold py-16 md:py-24">
      <div className="mx-auto px-5 md:px-8 lg:px-12 xl:px-16 max-w-3xl text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">
          Join for 10% Off
        </h2>
        <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed">
          Subscribe for early access to new collections, styling notes, and a
          welcome gift on your first order.
        </p>

        {submitted ? (
          <p className="mt-8 text-white font-medium">
            Thank you. Your welcome code is on its way.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3.5 bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:border-white text-sm"
            />
            <Button
              type="submit"
              variant="goldDark"
              className="sm:w-auto border-white text-white hover:bg-ivory hover:text-espresso hover:border-ivory"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
