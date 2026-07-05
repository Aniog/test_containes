import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-primary/5 border border-primary/20 px-6 md:px-12 py-12 md:py-16 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">
            Join the Inner Circle
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-foreground leading-tight mb-4">
            Receive 10% Off Your First Order
          </h2>
          <p className="text-muted-foreground text-sm md:text-base mb-8 max-w-md mx-auto">
            Be the first to discover new collections, exclusive previews, and receive 10% off your first purchase.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3 bg-white border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-3 text-sm tracking-[0.12em] uppercase whitespace-nowrap hover:bg-gold-600 transition-colors"
            >
              {status === 'success' ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}