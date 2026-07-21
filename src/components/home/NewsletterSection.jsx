import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="py-16 md:py-24 bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-gold-400/80 mb-4 font-sans">
            Newsletter
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-cream mb-4">
            Join for 10% Off
            <br />
            <span className="italic">Your First Order</span>
          </h2>
          <p className="text-cream/60 text-sm md:text-base mb-8 leading-relaxed">
            Be the first to discover new collections, receive exclusive offers,
            and enjoy early access to limited-edition pieces.
          </p>

          {submitted ? (
            <p className="text-gold-400 font-serif italic text-lg">
              Thank you for subscribing. Your code is on its way.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-transparent border border-cream/30 px-5 py-3 text-sm text-cream placeholder-cream/40 focus:outline-none focus:border-cream/60 transition-colors font-sans"
              />
              <button
                type="submit"
                className="bg-cream text-ink uppercase tracking-[0.12em] text-sm font-medium px-8 py-3 hover:bg-cream/90 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}