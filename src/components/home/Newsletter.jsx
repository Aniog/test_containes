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
    <section className="bg-ink text-cream">
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-20 md:py-28 text-center">
        <p className="text-xs uppercase tracking-widest2 text-champagne mb-4">
          Join Velmora
        </p>
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
          10% off your first order
        </h2>
        <p className="mt-5 text-cream/70 max-w-md mx-auto leading-relaxed">
          Be the first to know about new collections, private sales, and stories
          from the studio.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-8 flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
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
            className="flex-1 bg-transparent border border-cream/30 text-cream placeholder:text-cream/50 px-5 py-3.5 text-sm focus:outline-none focus:border-champagne transition-colors"
          />
          <button
            type="submit"
            className="px-7 py-3.5 bg-champagne text-ink text-xs uppercase tracking-widest2 hover:bg-cream transition-colors duration-300 flex items-center justify-center gap-2"
          >
            Subscribe <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm text-champagne">
            Welcome to Velmora. Check your inbox for your 10% code.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-sm text-red-300">
            Please enter a valid email address.
          </p>
        )}
      </div>
    </section>
  )
}
