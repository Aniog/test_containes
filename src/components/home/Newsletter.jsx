import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="section bg-ink text-cream relative overflow-hidden" id="newsletter">
      {/* Decorative gold accent */}
      <div
        className="absolute -right-32 -top-32 w-96 h-96 rounded-full opacity-[0.05] bg-gold blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full opacity-[0.05] bg-gold blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto px-5 md:px-8 text-center">
        <p className="eyebrow text-gold-soft">The Velmora Letter</p>
        <h2 className="mt-4 font-serif text-cream text-[clamp(2rem,5vw,3.75rem)] leading-[1.05]">
          Join for <span className="italic font-normal text-gold-soft">10% off</span><br />
          your first order.
        </h2>
        <p className="mt-5 text-cream/65 text-base md:text-[17px] max-w-md mx-auto">
          Quiet notes on new pieces, behind-the-studio moments, and the occasional members-only preview.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="mt-10 max-w-md mx-auto flex flex-col sm:flex-row items-stretch gap-3"
          >
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border-b border-cream/40 focus:border-gold-soft px-1 py-3.5 text-cream placeholder:text-cream/40 text-sm focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="btn btn-accent group"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        ) : (
          <div className="mt-10 max-w-md mx-auto border border-gold-soft/30 px-6 py-5 text-cream/90 text-sm">
            <span className="text-gold-soft">Thank you.</span> Your 10% code is on its way to <span className="text-cream">{email}</span>.
          </div>
        )}

        <p className="mt-6 text-[11px] text-cream/40 tracking-wider">
          By subscribing you agree to our privacy policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
