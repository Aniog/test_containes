import { useState } from 'react'

export default function Newsletter() {
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
    <section className="py-16 md:py-24 bg-brand-gold">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <span className="text-xs tracking-widest uppercase text-white/70">
          Stay inspired
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-white mt-3 font-semibold">
          Join for 10% off your first order
        </h2>
        <p className="text-white/80 text-sm md:text-base mt-4 leading-relaxed">
          Be the first to know about new collections, exclusive drops, and behind-the-scenes stories from our atelier.
        </p>

        {submitted ? (
          <p className="text-white font-serif text-lg mt-8 italic">
            Thank you &mdash; you&rsquo;re on the list.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-white/20 text-white placeholder:text-white/50 border border-white/30 px-5 py-3.5 text-sm focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="bg-white text-brand-charcoal text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-brand-cream transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}