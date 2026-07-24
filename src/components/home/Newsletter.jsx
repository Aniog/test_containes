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
    <section className="py-20 md:py-28 bg-velmora-base">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-textOnDark tracking-[0.05em]">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-velmora-textMutedOnDark mt-3 tracking-[0.03em]">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-8">
            <p className="font-serif text-lg text-velmora-gold tracking-[0.05em]">
              Thank you for joining us.
            </p>
            <p className="font-sans text-sm text-velmora-textMutedOnDark mt-2">
              Your 10% discount code is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:w-auto flex-1 bg-transparent border border-velmora-dividerDark text-velmora-textOnDark px-4 py-3 font-sans text-sm placeholder:text-velmora-textMutedOnDark focus:border-velmora-gold focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-velmora-gold text-velmora-base px-8 py-3 font-sans text-sm uppercase tracking-[0.1em] hover:bg-velmora-goldLight transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
