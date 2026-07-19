import { useState } from 'react'
import { Send } from 'lucide-react'

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
    <section className="py-20 md:py-24 bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gold-light text-xs font-medium tracking-widest uppercase mb-4">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-light">
            Join for 10% Off
            <br />
            <span className="italic">Your First Order</span>
          </h2>
          <p className="mt-4 text-stone-400 text-sm leading-relaxed">
            Be the first to discover new collections, exclusive offers, and styling inspiration.
          </p>

          {submitted ? (
            <div className="mt-8 py-4 px-6 border border-gold/30 bg-gold/10 inline-block">
              <p className="text-gold-light text-sm font-medium">
                Thank you! Check your inbox for your welcome discount.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 bg-stone-800 border border-stone-700 text-ivory text-sm placeholder-stone-500 focus:outline-none focus:border-gold transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-gold text-white text-sm font-medium tracking-wider uppercase hover:bg-gold-dark transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-stone-500">
            Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  )
}
