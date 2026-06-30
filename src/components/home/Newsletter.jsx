import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="bg-dark-charcoal">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 text-center">
        <p className="text-xs uppercase tracking-[0.15em] text-warm-gold font-medium mb-4">
            Newsletter
          </p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory font-light leading-[1.15] mb-4">
          Join for 10% Off
          <br />
          Your First Order
        </h2>
        <p className="text-ivory/50 text-sm sm:text-base mb-8 max-w-md mx-auto">
          Be the first to discover new collections, early access, and exclusive
          offers — delivered straight to your inbox.
        </p>

        {submitted ? (
          <div className="text-warm-gold text-sm font-medium">
            Thank you! Check your inbox for your welcome code.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-5 py-3.5 bg-transparent border border-ivory/20 text-ivory text-sm placeholder:text-ivory/30 focus:outline-none focus:border-warm-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-warm-gold text-dark-charcoal text-xs uppercase tracking-[0.12em] font-medium px-8 py-3.5 hover:bg-warm-gold-light transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}