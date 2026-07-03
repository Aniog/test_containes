import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/lib/useScrollAnimation'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [sectionRef, isVisible] = useScrollAnimation()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section ref={sectionRef} className="bg-warm-black py-16 md:py-20">
      <div className={`container-wide text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-sm text-warm-sand mt-3 max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>
        {submitted ? (
          <p className="mt-8 text-gold font-serif text-lg">Welcome to Velmora. Check your inbox for your code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 px-5 py-3 bg-warm-charcoal border border-warm-brown/30 text-white text-sm placeholder:text-warm-sand/60 focus:outline-none focus:border-gold transition-colors"
            />
            <button type="submit" className="btn-primary flex items-center gap-2 whitespace-nowrap">
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
