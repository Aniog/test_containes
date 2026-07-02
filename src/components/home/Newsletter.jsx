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
    <section className="bg-velvet-950 py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-[11px] tracking-widest-plus uppercase text-gold-400 mb-5 font-medium">
          Join Velmora
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-cream font-medium mb-4">
          10% Off Your First Order
        </h2>
        <p className="text-velvet-300 text-sm mb-10 leading-relaxed">
          Sign up for early access to new collections, exclusive offers, and styling inspiration — plus 10% off your first purchase.
        </p>

        {submitted ? (
          <p className="text-gold-400 font-serif text-lg">
            Welcome to Velmora. Check your inbox.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-velvet-700 px-5 py-3 text-sm text-cream placeholder:text-velvet-500 focus:outline-none focus:border-gold-500 transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 text-white px-7 py-3 text-xs tracking-widest-plus uppercase font-medium hover:bg-gold-400 transition-colors"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}