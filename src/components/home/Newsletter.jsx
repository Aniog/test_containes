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
    <section className="py-20 md:py-28 bg-gold">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide-15 uppercase text-warm-black">
          Join for 10% Off
        </h2>
        <p className="font-sans text-base text-warm-black/80 mt-3 max-w-md mx-auto">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections.
        </p>

        {submitted ? (
          <p className="font-sans text-sm text-warm-black mt-8">Thank you for subscribing! Check your inbox for your discount code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-warm-cream border border-warm-cream px-4 py-3 text-warm-black font-sans text-sm placeholder:text-stone-500 focus:outline-none focus:border-warm-black"
            />
            <button
              type="submit"
              className="bg-warm-black text-warm-cream font-sans text-sm tracking-wide-15 uppercase px-8 py-3 hover:bg-stone-700 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
