import { useState } from 'react'
import { Mail } from 'lucide-react'

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
    <section className="bg-stone-950 section-padding">
      <div className="max-w-lg mx-auto text-center">
        <Mail size={24} strokeWidth={1.2} className="text-gold-400 mx-auto mb-5" />
        <h2 className="heading-serif text-2xl md:text-3xl text-cream-100 mb-3">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-sm text-cream-400/60 mb-8 tracking-wide">
          Be the first to know about new arrivals, styling tips, and exclusive offers.
        </p>

        {submitted ? (
          <p className="text-gold-400 text-sm tracking-wide animate-fade-in">
            Thank you! Welcome to the Velmora family.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-transparent border border-cream-400/20 text-cream-100 text-sm px-5 py-3.5 placeholder:text-cream-400/40 focus:outline-none focus:border-gold-500 transition-colors tracking-wide"
            />
            <button type="submit" className="btn-gold shrink-0">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
