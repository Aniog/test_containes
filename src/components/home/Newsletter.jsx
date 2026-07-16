import { useState } from 'react'
import { Send } from 'lucide-react'

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
    <section className="py-16 md:py-20 bg-warm-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-3">
            Stay Connected
          </p>
          <h2 className="font-serif text-heading-md text-white mb-3">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-white/50 text-sm mb-8 max-w-md mx-auto">
            Be the first to discover new collections, exclusive offers, and styling inspiration
            delivered to your inbox.
          </p>

          {submitted ? (
            <div className="animate-fade-in">
              <p className="text-gold font-serif text-lg">Welcome to the Velmora family.</p>
              <p className="text-white/50 text-sm mt-2">Check your inbox for your exclusive discount.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-warm-black px-8 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase hover:bg-gold-light transition-colors flex items-center justify-center gap-2"
              >
                <Send size={14} />
                Subscribe
              </button>
            </form>
          )}

          <p className="text-white/30 text-[11px] mt-4">
            Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  )
}
