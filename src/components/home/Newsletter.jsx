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
    <section className="py-16 md:py-24 bg-charcoal section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-4">Stay in Touch</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mb-4">
          Join for 10% Off Your First Order
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mb-6" />
        <p className="text-cream/60 text-sm md:text-base mb-8 max-w-md mx-auto">
          Be the first to discover new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-xl text-gold mb-2">Welcome to Velmora</p>
            <p className="text-cream/60 text-sm">Check your inbox for your exclusive discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 px-5 py-3.5 text-sm 
                         focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-charcoal px-8 py-3.5 text-xs uppercase tracking-[0.15em] font-medium 
                         hover:bg-gold-dark transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <Send size={14} />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
