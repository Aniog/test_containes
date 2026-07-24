import React, { useState } from 'react'

export default function NewsletterCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('submitting')
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1000)
  }

  return (
    <section className="py-12 md:py-16 bg-primary text-primary-foreground">
      <div className="container-padding text-center max-w-2xl mx-auto px-4">
        <h2 className="serif-heading text-2xl sm:text-3xl md:text-4xl mb-3">
          Join for 10% Off
        </h2>
        <p className="text-sm md:text-base text-primary-foreground/80 mb-6 md:mb-8">
          Subscribe to our newsletter for exclusive offers, styling tips, and early access to new collections.
        </p>

        {status === 'success' ? (
          <div className="bg-white/10 rounded-lg p-4 md:p-6">
            <p className="text-base md:text-lg">Thank you! Check your inbox for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status === 'error') setStatus('idle')
              }}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-white/50 text-sm md:text-base"
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="bg-white text-primary px-6 md:px-8 py-3 text-xs md:text-sm tracking-wider uppercase hover:bg-white/90 transition-colors disabled:opacity-50"
            >
              {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-xs md:text-sm mt-3 text-red-200">Please enter a valid email address.</p>
        )}
      </div>
    </section>
  )
}
