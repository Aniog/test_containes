import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

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
    <section className="bg-obsidian py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-manrope text-xs tracking-widest uppercase text-gold-dust mb-4">
            Join the Circle
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-on-dark mb-4">
            10% Off Your First Order
          </h2>
          <p className="font-manrope text-sm text-on-dark/50 leading-relaxed mb-10">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="animate-fade-in">
              <p className="font-cormorant text-2xl italic text-gold-light">
                Welcome to Velmora ✦
              </p>
              <p className="font-manrope text-xs text-on-dark/50 mt-2">
                Your 10% discount code is on its way to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-on-dark/20 text-on-dark placeholder-on-dark/30 font-manrope text-sm px-5 py-4 focus:outline-none focus:border-gold-dust transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-gold-dust text-obsidian font-manrope text-xs tracking-widest uppercase px-8 py-4 hover:bg-gold-deep transition-colors duration-300 font-semibold flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={2} />
              </button>
            </form>
          )}

          <p className="font-manrope text-[10px] text-on-dark/25 mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
