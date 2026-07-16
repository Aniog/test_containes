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
    <section className="bg-velmora-black section-padding py-20 md:py-24">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-velmora-gold text-xs tracking-widest-2xl uppercase font-medium mb-4">
          Stay in Touch
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-velmora-warm text-sm mb-8">
          Be the first to know about new arrivals, exclusive offers, and styling tips.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-xl text-velmora-gold italic">Welcome to Velmora</p>
            <p className="text-velmora-warm text-sm mt-2">Check your inbox for your exclusive code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white text-sm placeholder:text-velmora-warm focus:outline-none focus:border-velmora-gold transition-colors rounded-none"
            />
            <button type="submit" className="btn-primary flex items-center justify-center gap-2">
              <Send size={14} strokeWidth={1.5} />
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
