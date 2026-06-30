import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    toast.success("Welcome to Velmora — your 10% off code is on its way.")
    setEmail("")
  }

  return (
    <section className="py-16 md:py-24 bg-champagne">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-ink mb-4">
          Join for 10% Off
        </h2>
        <p className="text-ink/80 mb-8 max-w-lg mx-auto">
          Be the first to receive new arrivals, styling notes, and exclusive
          member-only offers.
        </p>
        <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 bg-ink border-ink text-cream placeholder:text-cream-muted focus-visible:ring-cream"
            required
          />
          <Button
            type="submit"
            className="h-12 bg-cream text-ink hover:bg-surface hover:text-cream uppercase tracking-[0.15em] text-xs px-8"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
