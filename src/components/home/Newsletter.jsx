import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

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
    <section className="bg-midnight-950">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-[10px] tracking-[0.2em] uppercase text-gold-400/80">
            Newsletter
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-cream mt-3 font-light">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-sm text-cream/50 mt-3 leading-relaxed">
            Be the first to know about new collections, exclusive drops, and
            behind-the-scenes stories from our studio.
          </p>

          {submitted ? (
            <div className="mt-8 flex items-center justify-center gap-2 text-gold-300">
              <Check className="w-4 h-4" />
              <span className="text-sm">
                You're in! Check your inbox for your code.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 bg-cream/5 border border-cream/20 text-cream text-sm placeholder:text-cream/30 focus:outline-none focus:border-cream/50 transition-colors"
              />
              <button
                type="submit"
                className="btn-primary text-xs whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}