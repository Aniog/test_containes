import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle")

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus("success")
    setEmail("")
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="rounded-2xl bg-brand-ink px-6 py-10 md:px-12 md:py-14 text-white">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl">Join for 10% off your first order</h2>
          <p className="mt-3 text-white/80 text-sm md:text-base">
            Be the first to know about new releases, styling stories, and exclusive offers.
          </p>
          <form onSubmit={onSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="h-11 flex-1 rounded-md border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              required
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
          {status === "success" && (
            <p className="mt-3 text-sm text-white/90">Welcome to the Velmora list. Check your inbox for your code.</p>
          )}
        </div>
      </div>
    </section>
  )
}
