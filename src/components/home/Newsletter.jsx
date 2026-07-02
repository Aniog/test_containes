import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

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
    <section className="bg-[#C49A6C] px-4 py-16 text-[#F6F3EF] sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-white/80">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
          10% Off Your First Order
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/90 md:text-base">
          Be the first to know about new arrivals, limited drops, and styling stories — delivered with care, never clutter.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 border-b-2 border-white/50 bg-transparent px-4 py-3 text-sm text-white placeholder-white/70 outline-none transition-colors focus:border-white"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#1A1512] px-8 py-3 text-xs font-medium uppercase tracking-[0.15em] text-[#F6F3EF] transition-colors hover:bg-[#2A211C]"
          >
            Subscribe
            <ArrowRight size={14} />
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm font-medium text-white">
            Welcome. Check your inbox for your gift.
          </p>
        )}
      </div>
    </section>
  )
}
