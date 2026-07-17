import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="py-20 px-4 bg-amber-600">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-4xl text-white mb-4">Join the Family</h2>
        <p className="font-sans text-white/90 mb-8 text-lg">
          Subscribe for 10% off your first order and exclusive updates
        </p>

        {isSubmitted ? (
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <p className="font-sans text-white text-lg">
              Thank you for subscribing! Check your email for your discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-6 py-3 bg-white text-gray-900 placeholder-gray-500 
                       focus:outline-none focus:ring-2 focus:ring-white/50 font-sans text-sm"
            />
            <button 
              type="submit"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 
                       font-sans text-sm uppercase tracking-wide transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="font-sans text-white/70 text-sm mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
