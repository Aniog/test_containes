import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus("success")
    setEmail("")
    setTimeout(() => setStatus("idle"), 4000)
  }

  return (
    <section className="py-20 md:py-28 bg-accent text-accent-foreground">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
          Join for 10% Off
        </h2>
        <p className="text-base md:text-lg text-white/80 mb-8">
          Subscribe for early access to new arrivals, styling notes, and a
          welcome gift on your first order.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white"
            required
          />
          <Button
            type="submit"
            className="h-12 px-8 bg-white text-accent hover:bg-white/90 text-sm uppercase tracking-[0.15em] shrink-0"
          >
            Subscribe
          </Button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-sm text-white">
            Thank you — your welcome code is on its way.
          </p>
        )}
      </div>
    </section>
  )
}
