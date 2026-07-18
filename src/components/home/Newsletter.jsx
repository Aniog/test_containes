import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

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
    <section className="bg-brand-espresso">
      <div className="section-padding py-16 md:py-20 text-center">
        <h2 className="font-serif text-heading md:text-4xl text-white font-light">
          Join for 10% Off
        </h2>
        <p className="mt-3 font-sans text-sm text-brand-muted-light max-w-md mx-auto">
          Subscribe to our newsletter for early access, exclusive offers, and 10% off your first order.
        </p>

        {submitted ? (
          <div className="mt-8 animate-fade-in">
            <p className="font-serif text-lg text-brand-gold">Welcome to Velmora</p>
            <p className="font-sans text-sm text-brand-muted-light mt-2">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-transparent border border-brand-charcoal-light text-white font-sans text-sm px-5 py-3.5 placeholder:text-brand-muted-light focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button type="submit" className="btn-primary flex items-center gap-2 whitespace-nowrap">
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
