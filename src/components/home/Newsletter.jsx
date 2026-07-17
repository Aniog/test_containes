import { useState } from 'react'

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
    <section className="bg-espresso text-ivory">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
        <p className="text-[11px] uppercase tracking-widest2 text-gold mb-4">Join Velmora</p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-tight">
          10% off your first order
        </h2>
        <p className="mt-4 text-sm text-ivory/70 max-w-md mx-auto">
          Be first to know about new collections, private sales, and styling notes.
          Enjoy 10% off when you subscribe.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
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
            className="flex-1 bg-transparent border border-ivory/30 text-ivory placeholder:text-ivory/40 px-4 py-4 text-sm focus:outline-none focus:border-gold transition-colors"
          />
          <button
            type="submit"
            className="bg-gold text-ivory text-[11px] uppercase tracking-widest2 font-medium px-8 py-4 hover:bg-gold-soft transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm text-gold-soft" role="status">
            Welcome to Velmora. Check your inbox for your code.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-sm text-red-300" role="alert">
            Please enter a valid email address.
          </p>
        )}
        <p className="mt-4 text-[11px] text-ivory/40">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
