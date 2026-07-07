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
    <section className="py-16 md:py-24 bg-stone-900">
      <div className="max-w-8xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-[0.05em] text-white">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-sm text-stone-400 font-sans max-w-md mx-auto">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections and exclusive offers.
        </p>
        <div className="w-12 h-px bg-gold mx-auto mt-6 mb-8" />

        {submitted ? (
          <p className="text-sm text-gold-light font-sans tracking-wide">
            Welcome to Velmora. Check your inbox for your 10% code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-stone-800 border border-stone-700 text-white text-sm font-sans px-5 py-3.5 placeholder-stone-500 focus:outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-gold hover:bg-gold-light text-white text-xs tracking-[0.15em] uppercase font-sans font-medium px-8 py-3.5 transition-colors duration-300 flex items-center justify-center gap-2"
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
