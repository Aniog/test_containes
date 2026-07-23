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
    <section className="bg-gold">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-espresso/70 mb-4">
          Join Velmora
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-espresso mb-4">
          10% Off Your First Order
        </h2>
        <p className="text-sm text-espresso/80 max-w-md mx-auto mb-8">
          Be the first to know about new collections, private sales and styling
          notes. No noise — only the good things.
        </p>

        {done ? (
          <p className="font-serif text-2xl text-espresso">
            Welcome to Velmora. Check your inbox.
          </p>
        ) : (
          <form
            onSubmit={submit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-ivory/90 px-5 py-4 text-sm text-ink placeholder:text-stone focus:outline-none focus:ring-2 focus:ring-espresso/30"
            />
            <button
              type="submit"
              className="bg-espresso text-ivory text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-ink transition-colors flex items-center justify-center gap-2"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
