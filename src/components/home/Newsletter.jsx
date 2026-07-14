import React, { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const Newsletter = () => {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className={`max-w-container mx-auto px-6 text-center relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white tracking-tight">
          Join for 10% Off Your First Order
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mt-4 mb-6" />
        <p className="font-sans text-sm text-stone-400 max-w-md mx-auto leading-relaxed mb-8">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration. Plus, get 10% off when you subscribe.
        </p>

        {submitted ? (
          <p className="font-sans text-sm text-gold-light animate-fade-in">Welcome to Velmora! Check your inbox for your 10% code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-white/10 border border-white/20 text-white placeholder-stone-500 font-sans text-sm px-5 py-3 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-gold text-white font-sans text-xs font-medium tracking-btn uppercase px-8 py-3 hover:bg-gold-light transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter
