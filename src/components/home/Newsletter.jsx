import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="py-16 md:py-20 bg-gold">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-espresso">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-sm md:text-base text-espresso/80 font-sans">
          Subscribe for early access to new collections, styling notes, and a
          welcome gift on your first order.
        </p>

        {status === 'success' ? (
          <p
            className="mt-8 text-espresso font-sans text-sm"
            role="status"
          >
            Thank you. Your welcome code is on its way.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status === 'error') setStatus('idle')
              }}
              placeholder="you@example.com"
              className="flex-1 bg-cream text-espresso placeholder:text-espresso/50 px-5 py-3.5 text-sm font-sans border border-transparent focus:outline-none focus:ring-2 focus:ring-espresso/30"
            />
            <button
              type="submit"
              className="bg-espresso text-cream px-8 py-3.5 text-xs uppercase tracking-[0.16em] font-sans hover:bg-charcoal transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="mt-3 text-xs text-espresso/80 font-sans">
            Please enter a valid email address.
          </p>
        )}
      </div>
    </section>
  )
}
