import React, { useState } from 'react'
import { toast } from 'sonner'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      toast.success('Welcome to the circle', {
        description: 'Check your inbox for 10% off your first order.',
      })
      setEmail('')
      setTimeout(() => setSubmitted(false), 2000)
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
      <div className="uppercase tracking-[0.15em] text-xs text-vel-gold mb-3">Stay Close</div>
      <h2 className="heading-serif text-4xl md:text-5xl tracking-[-0.01em] mb-4">Join for 10% off</h2>
      <p className="text-vel-muted mb-8 max-w-sm mx-auto">
        Be the first to know about new arrivals, private sales, and stories from the atelier.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="input flex-1"
          required
          disabled={submitted}
        />
        <button
          type="submit"
          className="btn btn-gold whitespace-nowrap"
          disabled={submitted}
        >
          {submitted ? 'Thank you' : 'Subscribe'}
        </button>
      </form>
      <p className="text-[10px] text-vel-light mt-4 tracking-wide">We respect your inbox. Unsubscribe anytime.</p>
    </section>
  )
}

export default Newsletter
