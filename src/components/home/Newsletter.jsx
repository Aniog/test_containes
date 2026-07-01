import { useState } from 'react'

export default function Newsletter() {
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
    <section className="bg-velmora-gold py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl text-white md:text-4xl">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-sm text-white/90 md:text-base">
          Subscribe for early access to new drops, styling notes, and 10% off
          your first order.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 border-b-2 border-white/40 bg-transparent px-4 py-3 text-sm text-white placeholder-white/70 outline-none transition-colors focus:border-white"
          />
          <button
            type="submit"
            className="bg-white px-8 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-velmora-gold transition-colors hover:bg-velmora-cream"
          >
            Subscribe
          </button>
        </form>
        {status === 'success' && (
          <p className="mt-4 text-sm text-white">Welcome — your code is on its way.</p>
        )}
      </div>
    </section>
  )
}
