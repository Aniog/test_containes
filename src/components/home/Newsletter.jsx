import React from 'react'
import { toast } from 'sonner'

export default function Newsletter() {
  const [email, setEmail] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)

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
    <section className="py-16 md:py-20 bg-velmora-base">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">Join for 10% Off</h2>
        <p className="text-white/70 text-sm mb-8">
          Your first order, on us. Plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="text-velmora-gold font-serif text-lg italic">
            Welcome to the Velmora family.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-velmora-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-velmora-gold text-white text-xs tracking-widest uppercase hover:bg-velmora-gold-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
