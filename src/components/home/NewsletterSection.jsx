import React, { useState } from "react"
import { Button } from "@/components/ui/Components"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="bg-velmora-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-3">
            Join for 10% Off
          </h2>
          <p className="font-sans text-sm text-white/80 mb-8">
            Subscribe to receive exclusive offers, early access to new collections, and styling inspiration.
          </p>

          {submitted ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-sm p-6">
              <p className="font-serif text-xl text-white mb-2">
                Welcome to Velmora
              </p>
              <p className="font-sans text-sm text-white/80">
                Check your inbox for your 10% discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 font-sans text-sm focus:outline-none focus:border-white/50 transition-colors"
                required
              />
              <Button
                type="submit"
                className="bg-white text-velmora-gold hover:bg-white/90 font-sans text-[13px] tracking-wider uppercase px-8 py-3.5 transition-colors whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
