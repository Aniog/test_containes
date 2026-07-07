import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export default function Newsletter() {
  const [email, setEmail] = React.useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.")
      return
    }
    toast.success("Welcome to Velmora — your 10% off code is on its way.")
    setEmail("")
  }

  return (
    <section className="bg-velmora-gold py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <h2 className="font-serif text-3xl font-medium text-velmora-espresso md:text-4xl">
          Join for 10% Off
        </h2>
        <p className="mt-4 text-velmora-espresso/80">
          Be the first to see new drops, styling notes, and member-only
          surprises.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 md:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-velmora-espresso/30 bg-velmora-white/40 placeholder:text-velmora-espresso/50 focus:border-velmora-espresso md:flex-1"
          />
          <Button type="submit" variant="secondary" size="lg">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
