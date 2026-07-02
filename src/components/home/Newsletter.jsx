import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section className="section-padding py-20 md:py-28">
      <div className="max-w-3xl mx-auto text-center bg-velmora-warm text-white py-16 md:py-20 px-8 md:px-16">
        <p className="text-velmora-gold-light font-sans text-xs tracking-widest uppercase mb-4">Join Velmora</p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-4">
          {submitted ? 'Welcome to the Family' : '10% Off Your First Order'}
        </h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto leading-relaxed">
          {submitted
            ? 'Check your inbox for your welcome discount. Prepare to fall in love.'
            : 'Sign up for early access to new collections, exclusive offers, and styling inspiration.'}
        </p>

        {!submitted && (
          <form onSubmit={handleSubmit} className="flex max-w-md mx-auto gap-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-4 py-3 font-sans text-sm outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-white px-5 hover:bg-velmora-gold-dark transition-colors flex items-center gap-2"
            >
              <span className="text-sm font-medium tracking-wide hidden md:inline">Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {submitted && (
          <p className="text-velmora-gold-light text-sm">Your code: <span className="font-bold tracking-wider">VELMORA10</span></p>
        )}
      </div>
    </section>
  )
}