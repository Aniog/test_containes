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
    <section className="bg-charcoal">
      <div className="px-6 md:px-12 lg:px-20 py-16 md:py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
          Join the Inner Circle
        </h2>
        <p className="font-sans text-sm text-white/60 mt-3 max-w-md mx-auto">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>
        {submitted ? (
          <p className="font-sans text-sm text-accent mt-8">
            Welcome to Velmora. Check your inbox for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-transparent border border-white/20 text-white font-sans text-sm px-5 py-3.5 placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-accent text-white font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-accent-dark transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
