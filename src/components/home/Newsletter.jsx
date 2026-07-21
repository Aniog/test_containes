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
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section className="bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-goldLight text-sm tracking-widest uppercase font-sans font-medium mb-3">
            Newsletter
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream leading-tight mb-4">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-cream/60 text-sm md:text-base mb-8 max-w-md mx-auto">
            Be the first to know about new collections, exclusive drops, and behind-the-scenes stories.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-dark-800 border border-dark-700 text-cream placeholder:text-dark-400 text-sm font-sans focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-cream px-6 py-3.5 text-sm font-sans font-medium tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-goldDark transition-colors"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>

          {status === 'success' && (
            <p className="text-goldLight text-sm mt-4">Thank you! You're now subscribed.</p>
          )}
        </div>
      </div>
    </section>
  )
}