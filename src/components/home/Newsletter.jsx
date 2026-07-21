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
    <section className="bg-champagne py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold-deep mb-4">
          Join the List
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
          10% off your first order
        </h2>
        <p className="text-ink/70 mt-4 max-w-md mx-auto">
          Be first to know about new collections, private sales, and styling notes.
          No noise — just the good stuff.
        </p>

        {status === 'success' ? (
          <p className="mt-8 font-serif text-2xl text-ink">
            Welcome to Velmora. Check your inbox for your code.
          </p>
        ) : (
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
              className="flex-1 bg-cream border border-ink/15 px-5 py-4 text-sm text-ink placeholder:text-stone outline-none focus:border-ink transition-colors"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-ink text-cream text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-gold-deep transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="mt-3 text-sm text-gold-deep">
            Please enter a valid email address.
          </p>
        )}
      </div>
    </section>
  )
}
