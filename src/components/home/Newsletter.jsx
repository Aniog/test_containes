import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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
    <section className="bg-velmora-accent py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl text-white sm:text-4xl">Join for 10% off your first order</h2>
        <p className="mt-3 text-sm text-white/80">
          Be the first to know about new drops, styling tips, and exclusive offers.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 flex-1 border-white/30 bg-white/10 text-white placeholder:text-white/60 focus-visible:ring-white"
            required
          />
          <Button
            type="submit"
            className="h-12 bg-velmora-charcoal px-8 text-xs font-semibold uppercase tracking-widest text-white hover:bg-velmora-espresso"
          >
            Subscribe
          </Button>
        </form>
        {status === "success" && (
          <p className="mt-4 text-sm text-white">Thank you. Your welcome offer is on its way.</p>
        )}
      </div>
    </section>
  )
}
