import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | success | error

  const onSubmit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="py-20 md:py-28 bg-champagne">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-deep mb-4">
          Join the List
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
          10% off your first order
        </h2>
        <p className="text-ink/70 text-base mt-4 max-w-md mx-auto">
          Be first to know about new collections, private sales, and styling notes.
          Enjoy 10% off when you join.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-8 flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setStatus('idle')
            }}
            placeholder="Your email address"
            aria-label="Email address"
            className="flex-1 bg-ivory border border-sand px-5 py-4 text-sm text-ink placeholder:text-stone focus:outline-none focus:border-gold transition-colors"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-espresso text-ivory text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-ink transition-colors duration-300"
          >
            Subscribe
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm text-ink">
            Welcome to Velmora. Check your inbox for your 10% code.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-sm text-gold-deep">
            Please enter a valid email address.
          </p>
        )}
      </div>
    </section>
  )
}
