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
  }

  return (
    <section className="py-16 md:py-24 bg-gold">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-cream/90 text-sm md:text-base">
          Be the first to see new arrivals, styling notes, and exclusive offers.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 w-full bg-transparent border-b-2 border-cream/40 focus:border-cream text-cream placeholder:text-cream/60 py-2.5 outline-none text-sm"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-cream text-espresso px-6 py-2.5 uppercase tracking-[0.12em] text-xs font-semibold hover:bg-espresso hover:text-cream transition-colors flex items-center justify-center gap-2"
          >
            Subscribe
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-cream text-sm">
            Welcome to Velmora — your code is on its way.
          </p>
        )}
      </div>
    </section>
  )
}
