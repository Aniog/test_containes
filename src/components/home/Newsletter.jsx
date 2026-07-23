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
    <section className="bg-gold text-ivory">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-24 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-ivory/80 mb-4">
          Join the Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight">
          Join for 10% Off
          <br />
          Your First Order
        </h2>
        <p className="text-ivory/80 mt-5 max-w-md mx-auto">
          Be first to know about new collections, private sales, and styling
          notes from the studio.
        </p>

        {done ? (
          <p className="mt-8 font-serif text-2xl">
            Thank you — check your inbox for your code.
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
              className="flex-1 bg-ivory text-ink px-5 py-3.5 text-sm placeholder:text-stone focus:outline-none focus:ring-2 focus:ring-ivory rounded-sm"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-espresso text-ivory px-7 py-3.5 text-xs uppercase tracking-[0.18em] hover:bg-ink transition-colors duration-300 rounded-sm"
            >
              Subscribe <ArrowRight width={14} />
            </button>
          </form>
        )}
        <p className="text-[11px] text-ivory/70 mt-4">
          By subscribing you agree to our privacy policy.
        </p>
      </div>
    </section>
  )
}
