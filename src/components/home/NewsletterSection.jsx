import React, { useState } from 'react'

export default function NewsletterSection() {
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
    <section className="bg-[#1a1a1a] py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-3 font-sans">
          Stay Connected
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-[#faf8f5] mb-4">
          Join for 10% Off
        </h2>
        <p className="text-sm text-[#faf8f5]/60 mb-8">
          Your first order, on us. Plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <div className="text-[#c9a96e] font-serif text-lg">
            Welcome to Velmora. Check your inbox for your code.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-transparent border border-[#3d3d3d] text-[#faf8f5] text-sm placeholder:text-[#faf8f5]/40 focus:outline-none focus:border-[#c9a96e] transition-colors"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
