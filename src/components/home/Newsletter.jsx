import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="py-20 md:py-28 bg-warm-dark">
      <div className="container-narrow text-center">
        {submitted ? (
          <div className="animate-fade-in">
            <h2 className="font-serif text-3xl md:text-4xl text-gold tracking-wider">
              Welcome to Velmora
            </h2>
            <p className="mt-4 text-cream/60 text-sm font-sans">
              Check your inbox for your 10% off code. Thank you for joining us.
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream tracking-wider">
              Join for 10% Off
            </h2>
            <p className="mt-4 text-cream/50 text-sm font-sans max-w-md mx-auto">
              Sign up for early access to new collections, exclusive offers, and styling inspiration.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-cream/20 text-cream placeholder:text-cream/30 text-sm font-sans px-5 py-3.5 focus:outline-none focus:border-gold transition-colors"
              />
              <button type="submit" className="btn-gold flex items-center gap-2">
                Subscribe
                <ArrowRight size={16} />
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  )
}