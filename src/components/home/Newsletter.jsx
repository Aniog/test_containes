import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!email) return
    setDone(true)
    setEmail("")
  }

  return (
    <section className="bg-ink-800 text-cream">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-24 text-center">
        <p className="text-xs uppercase tracking-widest3 text-gold mb-4">Join Velmora</p>
        <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight">
          10% off your first order
        </h2>
        <p className="mt-4 text-ink-200 max-w-md mx-auto">
          Be first to know about new collections, private sales, and styling notes.
          Enjoy 10% off when you join.
        </p>

        {done ? (
          <p className="mt-8 font-serif text-2xl text-gold-soft italic">
            Welcome to Velmora. Check your inbox.
          </p>
        ) : (
          <form
            onSubmit={submit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-ink-500 px-5 py-4 text-sm text-cream placeholder:text-ink-300 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-white text-xs uppercase tracking-widest2 px-7 py-4 hover:bg-gold-light transition-colors flex items-center justify-center gap-2"
            >
              Subscribe <ArrowRight size={14} />
            </button>
          </form>
        )}
        <p className="mt-4 text-[11px] text-ink-300">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
