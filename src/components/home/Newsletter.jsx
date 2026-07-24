import { useState } from 'react'

const Newsletter = () => {
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
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-content mx-auto px-6 md:px-8 text-center">
        <h2 className="font-sans text-xs tracking-section uppercase text-cream/40 mb-3">
          Stay in Touch
        </h2>
        <p className="font-serif text-3xl md:text-4xl text-cream font-light mb-4">
          Join for 10% Off Your First Order
        </p>
        <p className="font-sans text-sm text-cream/60 font-light mb-8 max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="inline-block bg-gold/20 border border-gold/40 px-8 py-4">
            <p className="font-serif text-lg text-cream">Thank you for joining us.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:w-auto flex-1 bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 font-sans text-sm px-6 py-3 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto font-sans text-xs tracking-btn uppercase bg-gold text-cream px-8 py-3 hover:bg-gold-light transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter
