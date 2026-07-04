import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

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
    <section className="py-16 md:py-24 bg-accent">
      <div className="max-w-3xl mx-auto px-5 md:px-10 lg:px-16 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white">
          Join for 10% Off
        </h2>
        <p className="mt-3 font-sans text-sm text-white/80">
          Your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <div className="mt-8 flex items-center justify-center gap-2 text-white">
            <Check className="w-5 h-5" />
            <span className="font-sans text-sm">Thank you! Check your inbox for your code.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-white/10 border border-white/30 text-white placeholder:text-white/50 px-4 py-3.5 font-sans text-sm focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="bg-white text-accent px-8 py-3.5 font-sans text-xs uppercase tracking-[0.15em] hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="mt-4 font-sans text-[11px] text-white/50">
          By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
