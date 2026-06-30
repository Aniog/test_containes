import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      console.log('Newsletter signup:', email)
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="bg-obsidian py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs font-sans uppercase tracking-ultra-wide text-gold mb-4">Join the Circle</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-ivory mb-4">
            10% Off Your First Order
          </h2>
          <p className="text-sm font-sans text-stone leading-relaxed mb-8">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="animate-fadeIn">
              <p className="font-serif text-xl italic text-gold mb-2">Thank you for joining.</p>
              <p className="text-sm font-sans text-stone">Your discount code is on its way to your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-stone/30 text-ivory placeholder-stone/50 text-sm font-sans px-5 py-3.5 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-obsidian text-xs font-sans uppercase tracking-widest px-6 py-3.5 hover:bg-gold-light transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <p className="text-xs font-sans text-stone/40 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
