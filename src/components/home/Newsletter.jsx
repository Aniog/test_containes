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
    <section className="bg-ink text-cream">
      <div className="mx-auto max-w-content px-5 md:px-8 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-champagne mb-4">
            Join Velmora
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            10% off your first order
          </h2>
          <p className="mt-4 text-cream/70 leading-relaxed">
            Be first to see new collections, private sales, and stories from
            the studio. Plus, enjoy 10% off your first piece.
          </p>

          {done ? (
            <p className="mt-8 font-serif text-2xl italic text-champagne">
              Welcome to Velmora. Check your inbox.
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
                className="flex-1 bg-transparent border border-cream/30 px-4 py-3.5 text-sm text-cream placeholder:text-cream/50 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-cream uppercase tracking-widest2 text-[11px] px-7 py-3.5 hover:bg-gold-deep transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
          <p className="mt-4 text-[11px] text-cream/40">
            By subscribing you agree to our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  )
}
