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
    <section className="bg-espresso">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24 text-center">
        <h2 className="font-serif text-3xl lg:text-4xl text-cream tracking-wide">
          Join the Velmora Circle
        </h2>
        <p className="mt-4 text-sm text-cream/60 font-light tracking-wide">
          Sign up and enjoy 10% off your first order — plus early access to new collections.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-lg text-gold-light italic">
            Thank you — check your inbox for your welcome code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 px-5 py-3 bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/30 text-sm rounded-sm focus:outline-none focus:border-gold/50 transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-gold text-espresso text-xs font-medium tracking-[0.2em] uppercase hover:bg-gold-light transition-colors rounded-sm"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="mt-6 text-[11px] text-cream/30">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
