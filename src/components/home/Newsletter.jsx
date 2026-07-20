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
    <section className="bg-[#1A1A1A]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-white/60 text-sm md:text-base mt-3 max-w-sm mx-auto">
          Be the first to know about new collections, exclusive edits, and early access.
        </p>

        {submitted ? (
          <p className="text-gold text-sm mt-6">
            Thank you! Check your inbox for your 10% off code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 md:mt-8 flex max-w-md mx-auto border border-white/20">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent text-white placeholder-white/40 px-4 py-3 text-sm outline-none"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-gold hover:bg-gold-dark text-white text-sm uppercase tracking-[0.15em] font-medium transition-colors duration-300 flex items-center gap-1"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}