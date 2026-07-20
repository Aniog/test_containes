import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section className="bg-gold py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-ivory/80 mb-4">
          Join the Velmora Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-tight">
          10% off your first order
        </h2>
        <p className="mt-4 text-sm text-ivory/85 max-w-md mx-auto">
          Be first to know about new collections, private sales, and styling
          notes. No spam, ever.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-xl italic text-ivory">
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
              className="flex-1 bg-ivory px-5 py-4 text-sm text-ink placeholder:text-muted outline-none focus:ring-2 focus:ring-ivory"
            />
            <button
              type="submit"
              className="bg-ink px-8 py-4 text-xs uppercase tracking-[0.2em] text-ivory hover:bg-ink-soft transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
