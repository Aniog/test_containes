import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section className="bg-ink text-cream">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold-soft mb-4">
          Join Velmora
        </p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight">
          10% Off Your First Order
        </h2>
        <p className="mt-4 text-cream/70 text-sm md:text-base max-w-md mx-auto">
          Be the first to know about new collections, private sales, and
          styling notes. Plus, enjoy 10% off your first piece.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-xl text-gold-soft italic">
            Welcome to Velmora. Check your inbox for your code.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-cream/40 text-cream placeholder:text-cream/50 px-5 py-4 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-cream px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-soft transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="mt-4 text-[11px] text-cream/40">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
