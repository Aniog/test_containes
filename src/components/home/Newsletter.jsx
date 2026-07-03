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
    <section className="py-16 md:py-24 bg-dark">
      <div className="max-w-content mx-auto px-5 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-[0.05em] text-white">Join for 10% Off Your First Order</h2>
        <p className="mt-3 text-white/60 text-sm max-w-md mx-auto">
          Subscribe to receive exclusive access to new collections, styling tips, and a welcome discount.
        </p>

        {submitted ? (
          <p className="mt-8 text-gold font-serif text-lg">Welcome to Velmora. Check your inbox for your code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-gold text-white text-xs tracking-[0.2em] uppercase font-medium px-8 py-3 hover:bg-gold-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
