import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="section-padding bg-stone-900 text-white">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Join for 10% off your first order</h2>
          <p className="text-stone-400 text-sm mb-8">
            Be the first to know about new collections, exclusive offers, and styling inspiration.
          </p>

          {submitted ? (
            <p className="text-gold text-sm">Thank you! Check your inbox for your welcome code.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3.5 bg-stone-800 border border-stone-700 text-white placeholder:text-stone-500 text-sm rounded-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
