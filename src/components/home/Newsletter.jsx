import React, { useState } from 'react'

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
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container-padding text-center max-w-2xl mx-auto">
        <h2 className="serif-heading text-3xl md:text-4xl mb-3">Join for 10% Off</h2>
        <p className="text-sm text-primary-foreground/80 mb-8">
          Your first order, plus early access to new collections and exclusive offers.
        </p>
        {submitted ? (
          <div className="py-4">
            <p className="serif-heading text-xl italic">Welcome to Velmora</p>
            <p className="text-sm text-primary-foreground/80 mt-2">Check your inbox for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:border-primary-foreground/60"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary-foreground text-primary text-sm tracking-widest uppercase hover:bg-white transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="text-xs text-primary-foreground/50 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}

export default Newsletter
