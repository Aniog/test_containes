import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { ref: revealRef, revealed } = useScrollReveal(0.1)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gold">
      <div ref={revealRef} className={`max-w-content mx-auto px-4 md:px-6 text-center transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide mb-4">
          Join for 10% Off
        </h2>
        <p className="font-sans text-sm text-white/80 tracking-cta uppercase mb-8">
          Your first order, plus early access to new drops
        </p>

        {submitted ? (
          <div className="bg-white/20 backdrop-blur-sm p-6 max-w-md mx-auto">
            <p className="font-serif text-lg text-white">Welcome to Velmora</p>
            <p className="font-sans text-sm text-white/80 mt-2">Check your inbox for your 10% code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-charcoal border-white placeholder:text-muted h-12 focus-visible:ring-gold"
              required
            />
            <Button
              type="submit"
              className="bg-charcoal hover:bg-charcoal/90 text-white h-12 px-6 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gold"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter
