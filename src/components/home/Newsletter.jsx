import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

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
    <section className="py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-dark-gray rounded-sm p-8 md:p-12 lg:p-16 text-center">
          <h2 className="font-serif font-light text-3xl md:text-4xl text-foreground mb-4">
            Join for 10% Off
          </h2>
          <p className="font-sans text-sm text-muted-foreground mb-8 max-w-md mx-auto">
            Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections and exclusive offers.
          </p>

          {submitted ? (
            <div className="animate-fade-in">
              <p className="font-serif text-lg text-primary">Thank you for subscribing</p>
              <p className="font-sans text-sm text-muted-foreground mt-2">Your 10% discount code is on its way.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full sm:flex-1 bg-background border border-border text-foreground font-sans text-sm px-4 py-3 placeholder:text-light-gray focus:outline-none focus:border-primary transition-colors duration-300"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-primary text-primary-foreground font-sans text-xs uppercase tracking-nav px-6 py-3 hover:bg-muted-gold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-3 h-3" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Newsletter
