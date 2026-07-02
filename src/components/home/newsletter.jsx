import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"

export const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section className="bg-gold-light py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 text-center md:px-10 lg:px-16">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gold-dark">Insider Perks</p>
        <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
          Join for 10% Off
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted md:text-base">
          Subscribe for first access to new collections, styling notes, and a welcome gift on your first order.
        </p>

        {submitted ? (
          <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 text-ink">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-white">
              <Check className="h-4 w-4" />
            </div>
            <p className="text-sm font-medium">Thank you. Your welcome code is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 border-hairline bg-cream px-4 focus:border-gold"
            />
            <Button type="submit" className="sm:w-auto">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
