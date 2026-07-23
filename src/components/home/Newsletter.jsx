import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    toast.success("Thank you for joining — your 10% code is VELMORA10")
    setEmail("")
  }

  return (
    <section className="bg-velmora-gold py-20 lg:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <h2 className="font-serif text-3xl font-light uppercase tracking-[0.12em] text-velmora-cream md:text-4xl">
          Join for 10% Off
        </h2>
        <p className="mt-4 font-sans text-base text-velmora-cream/80">
          Subscribe for early access to new collections, styling notes, and a
          welcome gift on your first order.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 flex-1 border-velmora-cream/30 bg-velmora-cream/10 text-velmora-cream placeholder:text-velmora-cream/60 focus-visible:ring-velmora-cream"
          />
          <Button
            type="submit"
            className="h-12 bg-velmora-charcoal text-velmora-cream hover:bg-velmora-charcoal/90"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
