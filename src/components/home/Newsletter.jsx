import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section className="bg-ink text-ivory">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
        <p className="text-[11px] uppercase tracking-widest2 text-gold-light mb-4">Join Velmora</p>
        <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight">
          10% off your first order
        </h2>
        <p className="mt-5 text-ivory/70 max-w-md mx-auto">
          Be first to know about new collections, private sales, and styling notes.
          Enjoy 10% off when you join.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-2xl text-gold-light italic">
            Welcome to Velmora. Check your inbox.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-9 flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-ivory/30 text-ivory placeholder:text-ivory/50 px-4 py-3.5 text-sm outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-ink text-[11px] uppercase tracking-widest3 font-medium px-8 py-3.5 hover:bg-ivory transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="mt-5 text-xs text-ivory/40">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
