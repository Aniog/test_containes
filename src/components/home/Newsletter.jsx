import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'

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
    <section className="py-16 md:py-24 bg-gold">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {submitted ? (
          <div className="text-white">
            <h2 className="font-serif text-3xl md:text-4xl font-light">Welcome to the Family</h2>
            <div className="w-12 h-0.5 bg-white/40 mx-auto mt-4" />
            <p className="text-white/80 text-sm md:text-base mt-4">
              Check your inbox for your 10% off code.
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
              Join for 10% Off
            </h2>
            <div className="w-12 h-0.5 bg-white/40 mx-auto mt-4" />
            <p className="text-white/80 text-sm md:text-base mt-4 max-w-md mx-auto">
              Be the first to know about new collections, exclusive drops, and insider events. 
              Plus, enjoy 10% off your first order.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 mt-8 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-5 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-white/60 transition-colors"
              />
              <Button
                type="submit"
                variant="dark"
                className="flex-shrink-0 w-full sm:w-auto"
              >
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </form>
            <p className="text-white/40 text-xs mt-4">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </section>
  )
}