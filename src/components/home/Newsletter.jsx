import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

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
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-gradient-to-br from-velvet-600 to-velvet border border-gold/20 rounded-sm p-10 md:p-16 text-center relative overflow-hidden">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-16 h-[1px] bg-gold/30" />
          <div className="absolute top-0 left-0 h-16 w-[1px] bg-gold/30" />
          <div className="absolute bottom-0 right-0 w-16 h-[1px] bg-gold/30" />
          <div className="absolute bottom-0 right-0 h-16 w-[1px] bg-gold/30" />

          <div className="max-w-lg mx-auto relative z-10">
            <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4 font-sans">Stay Connected</p>
            <h2 className="font-serif text-3xl md:text-4xl text-velvet-50 mb-3">
              Join for 10% Off
            </h2>
            <p className="text-velvet-50/60 text-sm mb-8 font-sans font-light">
              Be the first to know about new collections, exclusive previews, and 
              receive 10% off your first order.
            </p>

            {submitted ? (
              <p className="text-gold text-sm font-sans">
                Thank you! Your discount code is on its way.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-velvet border border-velvet-400/40 rounded-sm px-5 py-4 text-sm text-velvet-50 placeholder:text-velvet-200/40 focus:outline-none focus:border-gold/60 transition-colors font-sans"
                />
                <button
                  type="submit"
                  className="bg-gold text-velvet font-medium uppercase tracking-[0.2em] text-xs px-8 py-4 hover:bg-gold-light transition-all duration-300 rounded-sm flex items-center gap-2"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}