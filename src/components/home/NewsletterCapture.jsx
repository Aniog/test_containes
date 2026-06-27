import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useInView } from '@/hooks/useInView'

export default function NewsletterCapture() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section ref={ref} className={`py-16 md:py-20 bg-velmora-charcoal text-velmora-cream transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">Stay Connected</p>
        <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide mb-3">
          Join for 10% Off
        </h2>
        <p className="text-sm text-velmora-cream/60 mb-8">
          Your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-serif text-lg text-velmora-gold">Welcome to Velmora</p>
            <p className="text-sm text-velmora-cream/60 mt-2">Check your inbox for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-transparent border-velmora-cream/20 text-velmora-cream placeholder:text-velmora-cream/40 focus:border-velmora-gold flex-1"
            />
            <Button variant="accent" size="md" type="submit">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
