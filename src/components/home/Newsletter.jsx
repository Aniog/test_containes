import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

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
    <section className="py-20 md:py-28 bg-gold-light">
      <div className="max-w-8xl mx-auto px-5 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-espresso">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-3 font-sans text-warm-500 text-base max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-8 font-serif text-lg text-espresso">
            Welcome to Velmora. Check your inbox for your 10% code.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-white border border-warm-200 px-5 py-3.5 font-sans text-sm text-espresso placeholder:text-warm-400 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-gold hover:bg-gold-hover text-white font-sans text-xs tracking-product uppercase px-8 py-3.5 flex items-center justify-center gap-2 transition-colors"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
