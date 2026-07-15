import React, { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => {
        setEmail('')
        setSubmitted(false)
      }, 2000)
    }
  }

  return (
    <section className="newsletter py-16">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="serif text-3xl text-white mb-3">Join for 10% off your first order</h2>
        <p className="text-white/70 text-sm mb-8">
          Be the first to know about new arrivals, private sales, and stories from the atelier.
        </p>

        {submitted ? (
          <p className="text-white text-sm tracking-[0.08em]">Thank you. Welcome to Velmora.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="input flex-1"
              required
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter
