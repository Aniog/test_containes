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
    <section className="py-20 md:py-28 bg-velmora-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-light tracking-wide">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-4 font-sans text-base text-stone-400 max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-lg text-velmora-gold">
            Thank you for subscribing! Check your inbox for your 10% discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:w-auto flex-1 bg-transparent border border-stone-600 text-velmora-light font-sans text-sm px-4 py-3 placeholder:text-stone-500 focus:border-velmora-gold focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-velmora-gold text-velmora-dark font-sans text-sm tracking-[0.1em] uppercase px-8 py-3 hover:bg-velmora-gold-light transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
