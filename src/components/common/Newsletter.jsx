import { useState } from 'react'

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
    <section className="bg-velmora-blush/40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight">
            Join for 10% off your first order
          </h2>
          <p className="mt-3 text-sm text-velmora-taupe">
            Be the first to know about new collections, exclusive offers, and styling inspiration.
          </p>

          {submitted ? (
            <p className="mt-8 text-sm text-velmora-gold font-medium tracking-wide">
              Thank you — check your inbox for your discount code.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3 bg-white border border-velmora-sand text-sm text-velmora-charcoal placeholder:text-velmora-taupe/60 focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-velmora-deep text-white text-xs tracking-[0.15em] uppercase font-medium hover:bg-velmora-charcoal transition-colors"
              >
                Sign Up
              </button>
            </form>
          )}

          <p className="mt-4 text-[10px] text-velmora-taupe/70">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
