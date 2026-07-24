import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="bg-ink text-ivory">
      <div className="mx-auto max-w-8xl px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Join Velmora</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-tight">
            10% off your first order
          </h2>
          <p className="mt-4 text-ivory/70 text-sm md:text-base">
            Be the first to know about new collections, private sales, and styling notes. No noise —
            only the good things.
          </p>

          <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setStatus('idle')
              }}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-ivory/30 px-5 py-3.5 text-sm text-ivory placeholder:text-ivory/40 focus:outline-none focus:border-gold transition-colors"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 bg-gold text-ink px-7 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-ivory transition-colors"
            >
              Subscribe
              <ArrowRight size={15} strokeWidth={1.5} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-sm text-gold-light">Welcome to Velmora. Check your inbox for your code.</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-sm text-red-300">Please enter a valid email address.</p>
          )}
          <p className="mt-4 text-xs text-ivory/40">By subscribing you agree to our privacy policy.</p>
        </div>
      </div>
    </section>
  )
}
