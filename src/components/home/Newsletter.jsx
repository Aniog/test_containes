import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="py-20 md:py-28 bg-champagne">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <p className="text-[11px] uppercase tracking-widest2 text-ivory/70 mb-4">
          Join Velmora
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-tight">
          10% off your first order
        </h2>
        <p className="mt-4 text-sm text-ivory/85 max-w-md mx-auto">
          Be the first to know about new collections, private sales and styling
          notes. Enjoy 10% off when you join.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-2xl text-ivory italic">
            Welcome to Velmora. Check your inbox for your code.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-ivory/95 text-ink placeholder:text-taupe px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-ivory rounded-sm"
            />
            <button
              type="submit"
              className="bg-espresso text-ivory hover:bg-ink transition-colors px-8 py-4 text-xs uppercase tracking-widest2 font-medium rounded-sm"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="mt-4 text-[11px] text-ivory/60">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
