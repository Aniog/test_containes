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
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="py-16 md:py-20 bg-velmora-dark">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-velmora-gold mb-3 font-sans">
          Exclusive Access
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-sm text-white/60 mb-8 font-sans max-w-md mx-auto">
          Be the first to know about new collections, exclusive drops, and behind-the-scenes stories.
        </p>

        <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
          <div className="flex-1 relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm px-5 py-3.5 focus:outline-none focus:border-velmora-gold transition-colors font-sans"
            />
          </div>
          <button
            type="submit"
            className="bg-velmora-gold hover:bg-velmora-gold-dark text-white px-6 flex items-center justify-center transition-all duration-300"
            aria-label="Subscribe"
          >
            {submitted ? (
              <Check className="w-4 h-4" />
            ) : (
              <ArrowRight className="w-4 h-4" />
            )}
          </button>
        </form>

        {submitted && (
          <p className="text-xs text-velmora-gold mt-3 font-sans">
            Thanks! Check your inbox for your 10% off code.
          </p>
        )}
      </div>
    </section>
  )
}