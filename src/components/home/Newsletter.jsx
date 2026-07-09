import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

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
    <section className="section-padding bg-velvet-900">
      <div className="container-site max-w-2xl mx-auto text-center">
        {submitted ? (
          <div className="animate-scale-in">
            <div className="w-16 h-16 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-7 h-7 text-gold-400" />
            </div>
            <h2 className="heading-lg text-velvet-50 mb-4">You're In</h2>
            <p className="body-text">Check your inbox — your 10% off code is waiting.</p>
          </div>
        ) : (
          <>
            <p className="text-xs tracking-super-wide uppercase text-gold-400 mb-5 font-medium">Join Velmora</p>
            <h2 className="heading-lg text-velvet-50 mb-4">Join for 10% off your first order</h2>
            <p className="body-text mb-8 max-w-md mx-auto">
              Sign up for early access to new collections, exclusive offers, and styling inspiration.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3.5 bg-velvet-950 border border-velvet-700 text-velvet-200 text-sm
                         placeholder:text-velvet-500 focus:outline-none focus:border-gold-500/50 transition-colors rounded-sm"
              />
              <button type="submit" className="btn-primary whitespace-nowrap flex items-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  )
}