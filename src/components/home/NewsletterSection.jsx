import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-accent px-6 py-14 text-center md:px-12 md:py-20">
          <h2 className="font-serif text-3xl font-medium text-white md:text-4xl">
            Join for 10% Off
          </h2>
          <p className="mx-auto mt-3 max-w-md font-sans text-sm leading-relaxed text-white/90">
            Subscribe for early access to new collections, styling notes, and 10% off your first
            order.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="flex-1 border-b-2 border-white/40 bg-transparent px-4 py-3 text-sm text-white placeholder-white/60 outline-none transition-colors focus:border-white"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 border border-white bg-white px-6 py-3 font-sans text-sm font-medium uppercase tracking-wide text-accent transition-colors hover:bg-cream"
            >
              {status === 'success' ? (
                <>
                  <Check size={16} strokeWidth={2} />
                  Subscribed
                </>
              ) : (
                <>
                  Subscribe
                  <ArrowRight size={16} strokeWidth={1.5} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
