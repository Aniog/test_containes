import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address")
      return
    }
    toast.success("Welcome to Velmora — your 10% off code is on its way!")
    setEmail("")
  }

  return (
    <section className="bg-champagne py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center text-white">
          <h2 className="font-serif text-3xl font-light md:text-5xl">
            Join for 10% Off
          </h2>
          <p className="mt-4 font-sans text-sm font-light leading-relaxed text-white/90">
            Be the first to know about new arrivals, exclusive offers, and styling notes from the studio.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-white/50 text-white placeholder:text-white/70 focus:border-white"
            />
            <Button
              type="submit"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-champagne"
            >
              Subscribe
            </Button>
          </form>
          <p className="mt-4 text-[10px] uppercase tracking-wide text-white/70">
            By subscribing, you agree to receive marketing emails.
          </p>
        </div>
      </div>
    </section>
  )
}
