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
    <section className="py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="bg-velvet-100 rounded-sm px-6 py-12 md:py-16 md:px-16 text-center max-w-3xl mx-auto">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-600 mb-4">
            Join the Velmora Circle
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-light text-velvet-950 mb-3">
            Get 10% Off Your First Order
          </h2>
          <p className="text-sm text-velvet-600 mb-8 max-w-sm mx-auto">
            Sign up for early access to new collections, exclusive offers, and styling inspiration.
          </p>

          {submitted ? (
            <p className="font-serif text-lg text-gold-600 italic">
              Welcome to the circle. Check your inbox for your code.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-cream border border-velvet-200 px-5 py-3.5 text-sm text-velvet-800 placeholder:text-velvet-400 font-sans focus:outline-none focus:border-gold-400 transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}