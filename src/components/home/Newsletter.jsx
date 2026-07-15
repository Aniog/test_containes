import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="bg-gold/15 border border-gold/30 rounded-sm px-6 md:px-16 py-14 md:py-20 text-center">
          <p className="text-xs uppercase tracking-widest3 text-gold-deep mb-4">
            Join the Velmora Circle
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink font-light">
            10% Off Your First Order
          </h2>
          <p className="mt-4 text-sm text-muted max-w-md mx-auto">
            Be first to know about new collections, private sales, and styling
            notes — plus a welcome gift in your inbox.
          </p>

          {submitted ? (
            <p className="mt-8 font-serif text-xl text-ink italic">
              Thank you. Check your inbox for your 10% code.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-cream border border-sand rounded-full px-6 py-3.5 text-sm text-ink placeholder:text-muted outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-ink text-cream text-xs uppercase tracking-widest2 px-8 py-3.5 rounded-full hover:bg-gold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight size={14} />
              </button>
            </form>
          )}
          <p className="mt-4 text-[11px] text-muted">
            By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
