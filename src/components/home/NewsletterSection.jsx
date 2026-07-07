import { useState } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address")
      return
    }
    setStatus("submitting")
    setTimeout(() => {
      setStatus("success")
      toast.success("Welcome to Velmora — enjoy 10% off your first order")
      setEmail("")
    }, 800)
  }

  return (
    <section id="journal" className="bg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-light uppercase tracking-widest text-cream sm:text-4xl">
          Join for 10% Off
        </h2>
        <p className="mt-4 text-sm text-cream/80">
          Subscribe for early access to new collections, styling notes, and a
          welcome gift on your first order.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="h-12 flex-1 border border-cream/30 bg-transparent px-4 text-sm text-cream placeholder:text-cream/50 focus:border-gold focus:outline-none sm:max-w-sm"
          />
          <Button
            type="submit"
            disabled={status === "submitting"}
            size="lg"
            className="bg-cream text-ink hover:bg-white disabled:bg-cream/70"
          >
            {status === "submitting" ? "Joining..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  )
}
