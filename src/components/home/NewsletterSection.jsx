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
    <section className="bg-[#1a1a1a] text-white py-16 md:py-20">
      <div className="container-padding text-center max-w-2xl mx-auto">
        <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl mb-3">
          Join for 10% Off
        </h2>
        <p className="text-white/60 text-sm mb-8">
          Your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <div className="text-[#c9a96e] font-['Cormorant_Garamond'] text-xl">
            Welcome to Velmora. Check your inbox for your discount.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-white/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#c9a96e] focus:outline-none transition-colors"
              required
            />
            <button type="submit" className="btn-accent whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
