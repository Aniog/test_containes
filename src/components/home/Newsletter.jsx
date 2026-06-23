import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-xl mx-auto text-center bg-cream-100 py-14 px-8 md:px-16">
        <p className="font-sans text-[10px] tracking-[0.35em] text-velvet-500 uppercase mb-3">
          Become an Insider
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-velvet-950 font-medium tracking-tight mb-3">
          Join for 10% off your first order
        </h2>
        <p className="font-sans text-sm text-velvet-500 mb-8 leading-relaxed">
          Early access to new collections, exclusive offers, and styling
          inspiration — delivered with care.
        </p>

        {submitted ? (
          <p className="font-serif italic text-velvet-700 text-lg">
            Thank you — welcome to Velmora.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 border-b border-velvet-300 bg-transparent px-2 py-3 text-sm font-sans text-velvet-900 placeholder:text-velvet-400 focus:outline-none focus:border-velvet-950 transition-colors"
            />
            <button type="submit" className="btn-primary text-xs">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
