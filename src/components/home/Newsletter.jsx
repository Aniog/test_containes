import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { toast } from "sonner"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    toast.success("Welcome to Velmora — your 10% off code is VELMORA10")
    setEmail("")
  }

  return (
    <section className="bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-medium sm:text-4xl">
          Join for 10% Off
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed opacity-90">
          Be the first to know about new arrivals, limited drops, and insider
          styling notes. Get 10% off your first order.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-primary-foreground"
          />
          <Button
            type="submit"
            variant="secondary"
            className="h-12 whitespace-nowrap px-6"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
