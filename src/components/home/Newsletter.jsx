import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="py-20 md:py-28 bg-[#1C1917]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Join for 10% off your first order
        </h2>
        <p className="text-[#A8A29E] mb-8 max-w-lg mx-auto">
          Be the first to know about new arrivals, exclusive offers, and the stories behind our designs.
        </p>

        {isSubmitted ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-4 inline-block">
            <p className="text-white font-medium">Welcome to the Velmora family! Check your inbox for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#C9A96E] transition-colors"
            />
            <Button type="submit" className="rounded-full px-8 py-3.5 bg-[#C9A96E] hover:bg-[#B8944F] text-white">
              Subscribe
            </Button>
          </form>
        )}

        <p className="text-xs text-[#78716C] mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </div>
    </section>
  )
}

export default Newsletter
