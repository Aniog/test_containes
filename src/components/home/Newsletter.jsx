import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="py-20 md:py-28 bg-velvet-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-sans text-xs uppercase tracking-widest text-velvet-500 mb-4">Exclusive Access</p>
        <h2 className="font-serif text-4xl md:text-5xl text-obsidian-800 font-light mb-4">
          Join for 10% Off<br />
          <em className="italic">Your First Order</em>
        </h2>
        <p className="font-sans text-sm text-obsidian-500 mb-10 leading-relaxed">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration. Unsubscribe anytime.
        </p>

        {submitted ? (
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-full bg-velvet-500 flex items-center justify-center mx-auto">
              <ArrowRight size={20} className="text-cream" />
            </div>
            <p className="font-serif text-xl text-obsidian-800">Welcome to Velmora</p>
            <p className="font-sans text-sm text-obsidian-500">Your 10% discount code is on its way to your inbox.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 bg-cream border border-velvet-200 text-obsidian-700 placeholder-obsidian-300 font-sans text-sm focus:outline-none focus:border-velvet-500 transition-colors"
            />
            <button
              type="submit"
              className="px-7 py-3.5 bg-velvet-500 text-cream font-sans text-xs uppercase tracking-widest hover:bg-velvet-600 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="font-sans text-[11px] text-obsidian-400 mt-5">
          By subscribing you agree to our Privacy Policy. No spam, ever.
        </p>
      </div>
    </section>
  )
}
