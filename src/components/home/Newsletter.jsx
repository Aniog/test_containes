import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    console.log('Newsletter signup:', email)
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="bg-velvet py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs uppercase tracking-widest text-gold mb-4">Join the Circle</p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream font-light mb-4">
          10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-cream/60 leading-relaxed mb-10">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-serif text-xl text-gold italic">Thank you for joining.</p>
            <p className="font-sans text-xs text-cream/50 mt-2 uppercase tracking-widest">
              Your 10% discount is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-cream/10 border border-cream/20 text-cream placeholder-cream/30 font-sans text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-velvet font-sans text-xs uppercase tracking-widest px-6 py-4 hover:bg-gold-dark transition-colors duration-200 flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="font-sans text-[10px] text-cream/30 mt-5 uppercase tracking-widest">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
