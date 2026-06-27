import { useState } from "react"
import { Button } from "@/components/ui/Button"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setStatus("success")
    setEmail("")
    setTimeout(() => setStatus("idle"), 4000)
  }

  return (
    <section className="bg-gold py-16 md:py-20">
      <div className="mx-auto max-w-2xl px-5 text-center md:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-ivory/80">Join the List</p>
        <h2 className="mt-2 font-serif text-3xl text-ivory md:text-4xl">
          10% Off Your First Order
        </h2>
        <p className="mt-3 text-ivory/80">
          Be the first to know about new arrivals, exclusive edits, and styling inspiration.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="h-12 flex-1 border border-ivory/30 bg-ivory/10 px-4 text-sm text-ivory placeholder:text-ivory/60 focus:border-ivory focus:outline-none"
          />
          <Button
            type="submit"
            variant="outline"
            className="border-ivory text-ivory hover:bg-ivory hover:text-gold"
          >
            Subscribe
          </Button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-sm text-ivory">Welcome — your code is on its way.</p>
        )}
      </div>
    </section>
  )
}
