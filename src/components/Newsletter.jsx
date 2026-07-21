import { useState } from 'react'
import { Send } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section className="bg-gold py-16 md:py-20">
      <div className="container-velmora">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-medium text-espresso-900 md:text-4xl">
            Join for 10% off your first order
          </h2>
          <p className="mt-3 font-sans text-sm text-espresso-800/80">
            Be the first to know about new drops, styling notes, and member-only moments.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 border-b-2 border-espresso-900/30 bg-transparent px-4 py-3.5 font-sans text-sm text-espresso-900 placeholder:text-espresso-900/50 focus:border-espresso-900 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 border border-espresso-900 bg-espresso-900 px-8 py-3.5 font-sans text-xs font-semibold uppercase tracking-widest text-cream-100 transition-colors hover:bg-espresso-800"
            >
              Subscribe
              <Send size={14} />
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 font-sans text-sm font-medium text-espresso-900">
              Thank you — your code is on its way.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
