import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="bg-espresso py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-gold/70 mb-3">Exclusive Access</p>
        <h2 className="text-3xl md:text-4xl text-white font-semibold mb-4" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>
          Join for 10% Off
        </h2>
        <p className="text-white/60 text-sm md:text-base mb-8 font-light max-w-md mx-auto">
          Be the first to know about new collections, exclusive drops, and insider perks. Plus, enjoy 10% off your first order.
        </p>

        {submitted ? (
          <p className="text-gold text-sm tracking-wider">
            Thank you! Check your inbox for your welcome offer.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-5 py-3.5 text-sm focus:outline-none focus:border-gold/50 transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-white uppercase tracking-[0.2em] text-sm px-8 py-3.5 hover:bg-gold-hover transition-all duration-300 flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}