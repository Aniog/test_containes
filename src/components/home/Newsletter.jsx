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
    <section className="py-16 md:py-20 bg-velmora-accent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-white/85 mb-3">
          Insider Perks
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-4 text-white/85 font-light">
          Be the first to see new drops, styling notes, and member-only offers.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-3.5 bg-white/10 border border-white/30 text-white placeholder:text-white/60 font-sans text-sm focus:outline-none focus:border-white transition-colors"
          />
          <button
            type="submit"
            className="px-8 py-3.5 bg-white text-velmora-accent font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-velmora-bg transition-colors"
          >
            Subscribe
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm text-white font-medium">
            Welcome to Velmora. Check your inbox for your code.
          </p>
        )}
      </div>
    </section>
  )
}
