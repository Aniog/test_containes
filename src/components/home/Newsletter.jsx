import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { toast } from 'sonner'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    toast.success('Welcome! Check your inbox for your 10% off code.')
    setEmail('')
  }

  return (
    <section className="bg-velmora-900 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
          Join the Inner Circle
        </h2>
        <p className="text-velmora-400 text-sm mt-3 max-w-sm mx-auto">
          Subscribe for 10% off your first order, early access to new drops, and exclusive stories.
        </p>

        {submitted ? (
          <p className="text-velmora-gold text-sm mt-8">
            You&apos;re on the list. Welcome to Velmora.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 max-w-md mx-auto flex gap-0"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-4 bg-velmora-800 border border-velmora-700 text-white placeholder:text-velmora-500 text-sm focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold hover:bg-velmora-700 text-white px-6 py-4 transition-colors duration-300"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
        <p className="text-[11px] text-velmora-500 mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}