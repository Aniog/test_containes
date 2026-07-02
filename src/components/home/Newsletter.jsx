import React, { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

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
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative overflow-hidden rounded-sm bg-[#111111] border border-[#2A2A2A] p-8 md:p-16 text-center">
          {/* Decorative accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />

          <div className="relative max-w-lg mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-[#F5F0EB] font-light">
              Join for 10% Off
            </h2>
            <p className="mt-3 text-sm text-[#A0988E]">
              Be the first to know about new collections, exclusive previews, and styling inspiration.
            </p>

            {submitted ? (
              <div className="mt-8 flex items-center justify-center gap-2 text-[#C9A96E]">
                <Check className="w-5 h-5" />
                <span className="text-sm">Welcome! Check your inbox for your 10% code.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#C9A96E] transition-colors placeholder:text-[#A0988E]/50"
                />
                <button
                  type="submit"
                  className="bg-[#C9A96E] text-black px-6 py-3 text-sm font-medium uppercase tracking-[0.1em] hover:bg-[#D4B878] transition-colors rounded-sm flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}