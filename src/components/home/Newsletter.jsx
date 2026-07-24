import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section className="bg-velmora-gold px-4 py-20 md:px-8">
      <div className="mx-auto max-w-3xl text-center text-white">
        <h2 className="font-serif text-3xl md:text-5xl">
          Join for 10% Off
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-sans text-sm leading-relaxed text-white/90">
          Be the first to shop new drops, receive styling notes, and enjoy 10%
          off your first order.
        </p>

        {submitted ? (
          <p className="mt-8 font-sans text-sm font-medium uppercase tracking-label text-white">
            Thank you — your code is on its way.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 border-white/40 bg-white/10 text-white placeholder:text-white/70 focus-visible:ring-white"
            />
            <Button
              type="submit"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-velmora-gold uppercase tracking-label"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
