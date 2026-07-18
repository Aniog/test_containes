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
    <section className="py-16 md:py-24 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide">
          Join for 10% Off
        </h2>
        <p className="mt-3 font-sans text-sm text-brand-muted-light max-w-md mx-auto">
          Subscribe to our newsletter for exclusive access to new collections, styling tips, and 10% off your first order.
        </p>
        <div className="w-12 h-px bg-brand-gold mx-auto mt-6 mb-8" />

        {submitted ? (
          <p className="font-serif text-lg text-brand-gold">Welcome to Velmora. Check your inbox for your code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 font-sans text-sm px-5 py-3 focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-brand-gold text-white font-sans text-xs tracking-ultra-wide uppercase px-8 py-3 hover:bg-brand-gold-dark transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
