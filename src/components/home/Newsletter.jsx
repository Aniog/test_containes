import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="py-16 md:py-24 bg-base text-surface">
      <div className="max-w-container mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-product uppercase">Join for 10% Off</h2>
        <p className="text-stone-400 mt-3 text-sm max-w-md mx-auto">
          Subscribe to our newsletter for early access to new collections, styling tips, and 10% off your first order.
        </p>
        <div className="w-12 h-px bg-gold mx-auto mt-6 mb-8" />

        {submitted ? (
          <p className="font-serif text-lg text-gold">Welcome to Velmora. Check your inbox for your code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-transparent border border-stone-700 text-surface px-4 py-3 text-sm font-sans placeholder:text-stone-600 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-gold hover:bg-gold-hover text-white px-6 py-3 text-xs uppercase tracking-nav font-sans transition-colors flex items-center justify-center gap-2"
            >
              Subscribe <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
