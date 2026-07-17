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
    <section className="py-20 md:py-28 bg-velmora-base">
      <div className="max-w-xl mx-auto px-5 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-velmora-white mb-4">
          Join the Circle
        </h2>
        <p className="font-sans text-sm text-velmora-white/60 mb-8">
          Sign up for 10% off your first order — plus early access to new
          collections and members-only stories.
        </p>

        {submitted ? (
          <p className="font-serif text-lg text-velmora-gold italic">
            Thank you — your code is on its way.
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
              className="flex-1 px-5 py-3.5 bg-transparent border border-velmora-white/20 text-velmora-white placeholder-velmora-white/30 font-sans text-sm focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button type="submit" className="btn-accent flex-shrink-0">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
