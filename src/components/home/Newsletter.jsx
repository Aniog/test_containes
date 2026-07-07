import React, { useState } from 'react'
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
    <section className="py-16 md:py-24 bg-[#C9A96E]">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-body text-[10px] uppercase tracking-widest text-white/80 mb-4">
          Newsletter
        </p>
        <h2 className="font-heading text-3xl md:text-4xl text-white tracking-wide leading-tight">
          Join for 10% Off<br />
          <span className="font-light italic">Your First Order</span>
        </h2>
        <p className="font-body text-sm md:text-base text-white/80 mt-4 max-w-md mx-auto">
          Be the first to know about new collections, exclusive previews, and jewelry care tips.
        </p>

        {submitted ? (
          <p className="mt-8 font-body text-white text-sm">Thank you! Check your inbox for your welcome code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-white text-[#1C1814] font-body text-sm placeholder:text-[#8A8278] focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#1C1814] text-white px-6 py-3.5 font-body text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#1C1814]/90 transition-colors duration-300"
            >
              <Send className="w-3.5 h-3.5" />
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}