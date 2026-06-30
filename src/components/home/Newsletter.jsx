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
    <section className="bg-brand-900">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 py-16 lg:py-24 text-center">
        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-2xl text-cream-50 mb-2">You&apos;re in!</p>
            <p className="text-sm text-brand-300 font-sans">
              Welcome to the Velmora family. Check your inbox for your 10% code.
            </p>
          </div>
        ) : (
          <>
            <p className="text-xs tracking-[0.15em] uppercase text-gold-400/70 font-sans mb-3">
              Newsletter
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream-50 tracking-wide">
              Join for 10% Off Your First Order
            </h2>
            <p className="mt-3 text-sm text-brand-300 font-sans max-w-sm mx-auto">
              Be the first to know about new collections, exclusive previews, and insider offers.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 flex items-center gap-3 max-w-md mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-transparent border border-brand-600/50 text-cream-50 placeholder:text-brand-400/60 px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold-500/50 transition-colors rounded-sm"
                />
              </div>
              <button
                type="submit"
                className="bg-gold-500 text-brand-950 px-6 py-3 text-xs tracking-[0.15em] uppercase font-sans font-medium hover:bg-gold-400 transition-all duration-300 rounded-sm flex items-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
            <p className="mt-4 text-[10px] text-brand-500 font-sans">
              No spam, ever. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </section>
  )
}