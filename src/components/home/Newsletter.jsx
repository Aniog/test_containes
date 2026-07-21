import React, { useState } from 'react'
import { toast } from 'sonner'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    toast.success('Welcome to Velmora! Check your inbox for 10% off.')
    setEmail('')
  }

  return (
    <section className="py-20 lg:py-28 bg-foreground text-background">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="serif-heading text-4xl md:text-5xl mb-4">
          Join the Velmora World
        </h2>
        <p className="text-background/70 mb-10 text-lg">
          Subscribe for exclusive access, styling tips, and 10% off your first order.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-transparent border border-background/30 px-6 py-3 text-sm placeholder:text-background/50 focus:outline-none focus:border-primary transition-colors"
            required
          />
          <button
            type="submit"
            className="bg-primary text-white px-8 py-3 text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
        <p className="text-xs text-background/40 mt-6">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
