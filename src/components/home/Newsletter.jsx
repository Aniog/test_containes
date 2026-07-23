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
    <section className="bg-accent">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20 text-center">
        <h2 className="font-serif text-3xl lg:text-4xl text-accent-foreground">
          Join the Velmora World
        </h2>
        <p className="mt-3 text-sm text-accent-foreground/80">
          Subscribe for 10% off your first order, plus early access to new collections.
        </p>

        {submitted ? (
          <p className="mt-8 text-sm text-accent-foreground font-medium">
            Thank you! Check your inbox for your welcome gift.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full sm:flex-1 px-4 py-3 bg-white/10 border border-accent-foreground/30 text-accent-foreground placeholder:text-accent-foreground/50 text-sm focus:outline-none focus:border-accent-foreground transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-foreground text-background text-sm uppercase tracking-widest font-medium hover:bg-foreground/90 transition-colors border-none"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
