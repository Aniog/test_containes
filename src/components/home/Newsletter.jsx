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
    <section style={{ backgroundColor: '#1A1714' }} className="py-20 md:py-28 relative overflow-hidden">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.4), transparent)' }} />

      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center relative z-10">
        <p className="font-manrope text-[10px] tracking-widest3 mb-4" style={{ color: '#C9A96E' }}>EXCLUSIVE ACCESS</p>
        <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.15] mb-5" style={{ color: '#FDFAF6' }}>
          Join for 10% off<br /><em className="italic" style={{ color: '#D4B87A' }}>your first order</em>
        </h2>
        <p className="font-manrope text-sm leading-relaxed mb-10" style={{ color: 'rgba(253,250,246,0.6)' }}>
          Be the first to know about new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-serif text-xl" style={{ color: '#C9A96E' }}>Thank you for joining.</p>
            <p className="font-manrope text-sm mt-2" style={{ color: 'rgba(253,250,246,0.6)' }}>Your 10% discount code is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-4 font-manrope text-sm outline-none"
              style={{
                backgroundColor: 'rgba(253,250,246,0.08)',
                border: '1px solid rgba(253,250,246,0.15)',
                color: '#FDFAF6',
              }}
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-4 font-manrope text-xs tracking-widest transition-colors duration-300"
              style={{ backgroundColor: '#C9A96E', color: '#1A1714' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#D4B87A' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#C9A96E' }}
            >
              SUBSCRIBE
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="font-manrope text-xs mt-5" style={{ color: 'rgba(253,250,246,0.35)' }}>No spam. Unsubscribe anytime.</p>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.4), transparent)' }} />
    </section>
  )
}
