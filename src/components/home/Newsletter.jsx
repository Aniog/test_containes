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
    <section className="py-16 lg:py-20 bg-brand-dark">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-brand-gold text-xs font-sans uppercase tracking-[0.2em] mb-4">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-brand-white font-light leading-tight mb-3">
          Join for{" "}
          <span className="text-brand-gold font-medium">10% off</span> your
          first order
        </h2>
        <p className="text-brand-stone font-sans text-sm mb-8 max-w-sm mx-auto">
          Be the first to know about new collections, exclusive previews, and
          member-only sales.
        </p>

        {submitted ? (
          <p className="text-brand-gold font-sans text-sm animate-fade-in">
            Thank you! Check your inbox for your welcome offer.
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
              className="flex-1 bg-transparent border border-brand-stone/40 text-brand-white placeholder:text-brand-stone/60 font-sans text-sm px-5 py-3.5 focus:outline-none focus:border-brand-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-brand-gold text-brand-white font-sans text-sm uppercase tracking-[0.15em] px-8 py-3.5 hover:bg-brand-goldDark transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}