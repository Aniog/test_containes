import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

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
    <section className="py-12 md:py-20 bg-[#1a1a1a]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-white mb-3 tracking-wide">
          Join for 10% off your first order
        </h2>
        <p className="text-sm text-gray-400 mb-8">
          Be the first to know about new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="text-white text-sm">Thank you for subscribing! Check your inbox for your discount code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-white"
            />
            <Button type="submit" className="bg-[#c9a96e] text-white hover:bg-[#b8944f] whitespace-nowrap">
              SUBSCRIBE
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
