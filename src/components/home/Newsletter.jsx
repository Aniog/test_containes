import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  return (
    <section className="bg-espresso">
      <div className="max-w-[700px] mx-auto px-6 py-20 md:py-28 text-center">
        <p className="text-[11px] tracking-[0.2em] uppercase text-gold-light mb-6">
          Join the Velmora Circle
        </p>
        <h2 className="font-serif text-[28px] md:text-[36px] tracking-[0.04em] text-warm-white">
          Receive 10% Off Your First Order
        </h2>
        <p className="mt-4 text-taupe text-sm max-w-[400px] mx-auto">
          Sign up for early access to new collections, exclusive offers, and styling inspiration.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-[440px] mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 bg-transparent border border-[rgba(255,255,255,0.2)] text-warm-white placeholder:text-taupe px-5 py-3.5 text-sm focus:outline-none focus:border-gold transition-colors"
          />
          <button
            type="submit"
            className="bg-gold text-espresso px-8 py-3.5 text-sm tracking-[0.12em] uppercase font-medium hover:bg-gold-light transition-colors"
          >
            Sign Up
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-gold-light text-sm animate-fadeIn">
            Thank you! Your 10% off code is on its way.
          </p>
        )}
      </div>
    </section>
  )
}
