import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

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
    <section className="section-padding py-16 md:py-20 bg-vbg">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-vmuted mb-3">
          Stay Connected
        </p>
        <h2 className="font-serif text-2xl md:text-3xl font-light text-vtext">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-vmuted mt-3">
          Be the first to know about new arrivals, exclusive offers, and
          styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-8 p-5 bg-white border border-vborder rounded-sm">
            <p className="font-sans text-sm text-vtext">
              Thank you! Check your inbox for your exclusive discount code.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-white border border-vborder font-sans text-sm text-vtext placeholder:text-vmuted/60 focus:outline-none focus:border-vgold transition-colors"
            />
            <button
              type="submit"
              className="btn-primary flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="font-sans text-[10px] text-vmuted/60 mt-4">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
