import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!email.trim()) {
      setError('Please enter your email.')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email.')
      return
    }
    setDone(true)
  }

  return (
    <section className="bg-espresso text-ivory py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <p className="text-[11px] uppercase tracking-widest3 text-gold mb-4">
          Join the List
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-tight">
          10% off your first order
        </h2>
        <p className="mt-5 text-ivory/70 max-w-md mx-auto">
          Be first to know about new collections, private sales, and styling
          notes. No spam — just beautiful things.
        </p>

        {done ? (
          <p className="mt-10 font-serif text-2xl text-gold-soft italic">
            Welcome to Velmora. Check your inbox for your code.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-ivory/30 text-ivory placeholder:text-ivory/40 px-5 py-3.5 text-sm focus:outline-none focus:border-gold transition-colors"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-gold text-espresso px-7 py-3.5 text-[11px] uppercase tracking-widest3 font-medium hover:bg-gold-soft transition-colors"
            >
              Subscribe <ArrowRight size={14} />
            </button>
          </form>
        )}
        {error && (
          <p className="mt-3 text-sm text-gold-soft" role="alert">
            {error}
          </p>
        )}
      </div>
    </section>
  )
}
