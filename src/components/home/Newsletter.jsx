import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) return
    setDone(true)
    setEmail("")
  }

  return (
    <section className="bg-champagne">
      <div className="mx-auto max-w-editorial px-6 py-20 text-center md:px-10 md:py-28">
        <p className="eyebrow text-ink/70">Join Velmora</p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
          Enjoy 10% off your first order
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-ink/70">
          Be the first to know about new collections, private sales and styling
          notes — plus a welcome gift in your inbox.
        </p>

        {done ? (
          <p className="mx-auto mt-8 max-w-md font-serif text-xl italic text-ink">
            Welcome to Velmora. Check your inbox for your 10% code.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 border border-ink/30 bg-cream/60 px-5 py-4 text-sm text-ink placeholder:text-ink/50 focus:border-ink focus:outline-none"
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        )}
        <p className="mx-auto mt-4 max-w-md text-xs text-ink/50">
          By subscribing you agree to receive marketing emails. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
