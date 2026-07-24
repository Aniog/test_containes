import React, { useState } from 'react'

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
    <section className="py-16 md:py-24 bg-base">
      <div className="max-w-container mx-auto px-6 md:px-10 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-white">
          Join for 10% Off
        </h2>
        <p className="font-sans text-sm text-accentLight mt-3 tracking-wide">
          Subscribe and receive 10% off your first order, plus early access to new collections.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-lg text-accent tracking-wide">
            Thank you for subscribing!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:w-auto flex-1 bg-transparent border border-hairline text-white font-sans text-sm px-4 py-3 placeholder:text-foregroundMuted/60 focus:border-accent focus:outline-none transition-colors rounded-none"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-accent hover:bg-accentHover text-foreground font-sans text-sm tracking-widest uppercase px-8 py-3 transition-colors duration-200 rounded-none"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
