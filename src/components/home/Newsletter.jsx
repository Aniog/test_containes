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
    <section className="bg-espresso py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-4">Exclusive Access</p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-ivory leading-tight">
          Join for 10% off<br />
          <em className="italic text-gold">your first order</em>
        </h2>
        <p className="font-sans text-sm text-ivory/50 mt-5 leading-relaxed">
          Be the first to know about new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-10 py-4 px-8 border border-gold/40 inline-block">
            <p className="font-serif text-lg text-gold italic">Thank you for joining Velmora.</p>
            <p className="font-sans text-xs text-ivory/50 mt-1">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder-ivory/30 font-sans text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-espresso font-sans text-xs tracking-widest uppercase px-6 py-4 hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="font-sans text-[10px] text-ivory/25 mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
