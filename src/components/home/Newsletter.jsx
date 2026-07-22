import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setDone(true)
  }

  return (
    <section className="bg-ink text-ivory">
      <div className="mx-auto max-w-content px-6 py-20 text-center md:px-10 md:py-28">
        <p className="text-[11px] uppercase tracking-widest2 text-gold-light">
          Join the Circle
        </p>
        <h2 className="mt-4 font-serif text-4xl font-light md:text-5xl">
          10% Off Your First Order
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-ivory/70">
          Be first to know about new collections, private sales, and styling
          notes. Plus, enjoy 10% off your first piece.
        </p>

        {done ? (
          <p className="mt-8 font-serif text-xl text-gold-light">
            Welcome to Velmora. Check your inbox for your code.
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
              className="flex-1 border border-ivory/30 bg-transparent px-5 py-4 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gold px-8 py-4 text-[11px] uppercase tracking-widest2 text-ink transition-colors hover:bg-ivory"
            >
              Subscribe <ArrowRight size={14} />
            </button>
          </form>
        )}
        <p className="mt-4 text-[10px] uppercase tracking-widest2 text-ivory/40">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
