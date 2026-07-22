import { useState } from "react"
import { MailOpen } from "lucide-react"
import { toast } from "sonner"
import { Reveal } from "@/components/Reveal"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    toast.success("Welcome to Velmora — your 10% code is on its way.")
    setEmail("")
  }

  return (
    <section className="bg-espresso py-16 md:py-24">
      <div className="container max-w-2xl text-center">
        <Reveal>
          <span className="inline-flex size-12 items-center justify-center rounded-full border border-ivory/15">
            <MailOpen className="size-5 text-bronze-light" strokeWidth={1.5} />
          </span>
          <h2 className="mt-6 font-serif text-3xl font-medium text-ivory md:text-5xl">
            Join for 10% off your first order
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ivory/60">
            New arrivals, styling notes and private offers — once a week, never more. Unsubscribe anytime.
          </p>
          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 min-[420px]:flex-row min-[420px]:gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="h-12 flex-1 rounded-sm border border-ivory/20 bg-transparent px-4 text-sm text-ivory placeholder:text-ivory/40 focus:border-bronze-light focus:outline-none"
            />
            <button
              type="submit"
              className="h-12 shrink-0 rounded-sm bg-bronze px-6 text-[11px] font-medium uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-bronze-dark"
            >
              Join
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
