import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section
      id="newsletter"
      className="py-20 md:py-28 bg-espresso text-cream"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <p
          id="newsletter-eyebrow"
          className="text-[10px] tracking-widest3 uppercase text-gold-light font-medium"
        >
          The List
        </p>
        <h2
          id="newsletter-title"
          className="mt-5 font-serif text-4xl md:text-5xl text-cream font-light tracking-tight leading-[1.1]"
        >
          Join for <em className="italic text-gold-light">10% off</em> your
          first order.
        </h2>
        <p className="mt-5 text-cream/70 font-light text-sm md:text-base max-w-md mx-auto leading-relaxed">
          Early access to new collections, occasional behind-the-bench notes,
          and the occasional free gift — never spam.
        </p>
        <form
          onSubmit={onSubmit}
          className="mt-10 flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            disabled={submitted}
            className="flex-1 bg-transparent border-b border-cream/40 focus:border-gold-light px-1 py-3 text-cream placeholder:text-cream/40 text-sm font-light tracking-wide outline-none transition-colors disabled:opacity-50"
          />
          <button
            type="submit"
            className="btn-gold shrink-0"
            disabled={submitted}
          >
            {submitted ? 'Welcome' : 'Subscribe'}
            {!submitted && <ArrowRight size={14} strokeWidth={1.5} />}
          </button>
        </form>
        {submitted && (
          <p className="mt-5 text-[10px] tracking-widest2 uppercase text-gold-light font-medium">
            Thank you — check your inbox for your code.
          </p>
        )}
      </div>
    </section>
  )
}
