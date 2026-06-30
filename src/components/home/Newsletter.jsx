import { useState } from 'react'

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
    <section className="bg-velmora-rose/15">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-24 text-center">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wider mb-3">Join the List</h2>
        <p className="text-sm text-velmora-muted mb-8">Sign up and enjoy 10% off your first order</p>

        {submitted ? (
          <p className="text-sm text-velmora-gold font-medium">
            Thank you! Check your email for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3 bg-white border border-velmora-hairline text-sm text-velmora-deep placeholder:text-velmora-muted focus:outline-none focus:border-velmora-gold transition-colors rounded-sm"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-velmora-gold text-white text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold-dark transition-colors rounded-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-[11px] text-velmora-muted mt-4">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
