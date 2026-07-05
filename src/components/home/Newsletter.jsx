import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
    window.setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="bg-cream py-20 md:py-28 border-t border-hairline">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Velmora Society</span>
          <h2
            id="newsletter-title"
            className="mt-5 font-serif text-4xl md:text-5xl leading-[1.1]"
          >
            Join for{' '}
            <span className="italic font-light text-gold">10% off</span>
            <br />
            your first order
          </h2>
          <p className="mt-5 text-sm md:text-base text-taupe leading-relaxed max-w-xl mx-auto">
            Early access to new pieces, private sale previews, and a
            handwritten note from the studio on your birthday.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-9 mx-auto flex flex-col sm:flex-row gap-3 max-w-md"
            aria-label="Newsletter signup"
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
              className="flex-1 bg-ivory border border-hairline focus:border-espresso px-5 py-3.5 text-sm placeholder:text-taupe outline-none transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              {submitted ? 'Thank you' : 'Subscribe'}
              {!submitted && <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.4} />}
            </button>
          </form>
          <p className="mt-4 text-[11px] uppercase tracking-widest2 text-taupe">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
