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
    <section className="py-16 lg:py-24 bg-brand-charcoal relative overflow-hidden">
      {/* Subtle gold gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-gold/5 rounded-full blur-3xl" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-brand-gold text-xs tracking-widest-2xl uppercase mb-4 font-medium">
          Stay Connected
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-text-light font-light mb-4">
          Join for 10% Off
        </h2>
        <p className="text-brand-muted-dark text-sm mb-10 max-w-md mx-auto leading-relaxed">
          Subscribe to receive exclusive offers, early access to new collections,
          and styling inspiration delivered to your inbox.
        </p>

        {submitted ? (
          <div className="text-brand-gold font-serif text-lg tracking-wider">
            Thank you for joining us.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-brand-dark-gray border border-brand-divider-dark text-brand-text-light placeholder-brand-muted-dark px-5 py-3.5 text-sm tracking-wider focus:outline-none focus:border-brand-gold transition-colors"
            />
            <Button type="submit" variant="primary" size="md">
              Subscribe
            </Button>
          </form>
        )}

        <p className="text-[10px] text-brand-muted-dark mt-6 tracking-wider">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
