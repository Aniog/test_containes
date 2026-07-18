import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setDone(true)
    setEmail("")
  }

  return (
    <section className="bg-ink py-20 text-cream-50 md:py-28">
      <div className="container-editorial text-center">
        <p className="font-sans text-[11px] uppercase tracking-ultra text-gold-light">
          Join Velmora
        </p>
        <h2 className="mt-4 font-serif text-4xl font-light leading-tight md:text-5xl">
          10% off your first order
        </h2>
        <p className="mx-auto mt-4 max-w-md font-sans text-sm text-cream-200/75">
          Be first to know about new collections, private sales, and stories from
          the studio.
        </p>

        {done ? (
          <p className="mx-auto mt-8 max-w-md font-serif text-xl italic text-gold-light">
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
              className="flex-1 border border-cream-200/30 bg-transparent px-5 py-3.5 font-sans text-sm text-cream-50 placeholder:text-cream-200/50 focus:border-gold-light focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-gold-deep px-8 py-3.5 font-sans text-[11px] uppercase tracking-ultra text-cream-50 transition-colors hover:bg-gold-light hover:text-ink"
            >
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}
        <p className="mx-auto mt-4 max-w-md font-sans text-[11px] text-cream-200/50">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
