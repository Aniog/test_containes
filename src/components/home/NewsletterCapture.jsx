import { useState } from 'react'
import { toast } from 'sonner'

export default function NewsletterCapture() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    toast.success('Welcome to Velmora! Check your inbox for 10% off.')
    setEmail('')
  }

  return (
    <section className="bg-[#1A1A1A] py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="font-serif text-2xl md:text-3xl text-white tracking-wide"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-3 text-sm text-white/60">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#B8860B] transition-colors"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-[#B8860B] text-white text-xs tracking-widest uppercase font-medium hover:bg-[#996F0A] transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-xs text-white/40">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
