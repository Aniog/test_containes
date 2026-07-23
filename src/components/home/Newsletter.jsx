import { useState } from 'react'
import Button from '@/components/ui/button'

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
    <section className="py-16 md:py-24 bg-[#1A1A1A]">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-gold text-xs tracking-widest uppercase font-sans mb-3">Exclusive Access</p>
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-[#A0988A] text-sm mb-8 max-w-md mx-auto font-sans leading-relaxed">
          Be the first to know about new collections, exclusive previews, and members-only offers.
        </p>

        {submitted ? (
          <p className="text-gold font-serif text-lg">Thank you! Check your inbox for your welcome code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder:text-[#666] font-sans text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <Button type="submit" variant="primary">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}