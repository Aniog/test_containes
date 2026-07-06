import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section className="bg-gold px-4 py-14 md:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center text-white">
        <h2 className="font-serif text-3xl font-normal md:text-4xl">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-3 text-sm font-light text-white/90">
          Be the first to know about new arrivals, limited drops, and styling notes.
        </p>

        {submitted ? (
          <p className="mt-8 font-sans text-sm font-medium uppercase tracking-extra-wide text-white">
            Welcome to Velmora — check your inbox.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 border-white/30 bg-white/10 text-white placeholder:text-white/70 focus:border-white focus:ring-white sm:flex-1"
              required
            />
            <Button
              type="submit"
              className="h-12 bg-white text-espresso hover:bg-cream"
            >
              Subscribe
            </Button>
          </form>
        )}

        <p className="mt-4 text-xs text-white/70">
          By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
