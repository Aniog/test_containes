import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section className="bg-ink text-cream py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <p className="text-xs uppercase tracking-widest2 text-champagne mb-4">
          Join the Velmora Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl mb-4">
          10% Off Your First Order
        </h2>
        <p className="text-cream/70 mb-8 max-w-md mx-auto">
          Be the first to know about new collections, private sales, and styling
          stories. Plus, enjoy 10% off your first order.
        </p>

        {submitted ? (
          <p className="font-serif text-2xl text-champagne italic">
            Thank you — check your inbox for your code.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-cream/30 px-5 py-4 text-sm text-cream placeholder:text-cream/50 focus:outline-none focus:border-champagne transition-colors"
            />
            <button
              type="submit"
              className="bg-champagne text-cream px-8 py-4 text-xs uppercase tracking-widest2 hover:bg-champagne-deep transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
        <p className="text-xs text-cream/40 mt-5">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
