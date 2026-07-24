import { useState } from 'react'
import { toast } from 'sonner'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }
    setSubmitted(true)
    toast.success('Welcome to Velmora! Check your inbox for 10% off.')
    setEmail('')
  }

  return (
    <section className="py-16 md:py-24 bg-charcoal-950">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gold-400 text-xs tracking-widest uppercase mb-4 font-sans">Join the Club</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-50 leading-tight mb-4">
          10% Off Your First Order
        </h2>
        <p className="text-velmora-300 mb-8 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>
        {submitted ? (
          <div className="bg-velmora-900/30 border border-gold-500/30 rounded p-6">
            <p className="font-serif text-xl text-gold-300 mb-2">Welcome to Velmora</p>
            <p className="text-velmora-300 text-sm">Check your inbox for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-velmora-700 text-velmora-50 placeholder-velmora-500 px-5 py-3 text-sm font-sans focus:outline-none focus:border-gold-500 transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-gold-500 text-white px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-gold-600 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
