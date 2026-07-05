import { useState } from "react"
import { Send, Check } from "lucide-react"
import { useReveal } from "@/hooks/useReveal"
import { cn } from "@/lib/utils"

export default function Newsletter() {
  const [ref, inView] = useReveal({ threshold: 0.1 })
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle") // idle | success

  const onSubmit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) return
    setStatus("success")
    setEmail("")
    setTimeout(() => setStatus("idle"), 4000)
  }

  return (
    <section
      ref={ref}
      className="bg-terracotta text-bone"
      aria-labelledby="newsletter-heading"
    >
      <div className="container-editorial py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className={cn("transition-all duration-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")}>
            <p className="text-[0.7rem] uppercase tracking-eyebrow text-bone/75 font-sans mb-4">
              The Atelier Letter
            </p>
            <h2
              id="newsletter-heading"
              className="font-serif text-4xl sm:text-5xl text-bone font-light leading-[1.05] tracking-tight"
            >
              Join for 10% off<br />your first order.
            </h2>
            <p className="mt-5 text-bone/85 max-w-md font-sans text-sm sm:text-base">
              Early access to new pieces, restocks, and the occasional letter from the atelier. No spam — only things worth wearing.
            </p>
          </div>
          <div className={cn("transition-all duration-700 delay-150", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")}>
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row items-stretch gap-2 max-w-md lg:ml-auto" noValidate>
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 h-12 px-5 bg-transparent border border-bone/40 text-bone placeholder:text-bone/55 rounded-full font-sans text-sm focus:outline-none focus:border-bone transition-colors"
              />
              <button
                type="submit"
                className="h-12 px-6 bg-bone text-terracotta-deep rounded-full text-[0.7rem] uppercase tracking-eyebrow font-medium hover:bg-bone-2 transition-colors inline-flex items-center justify-center gap-2"
              >
                {status === "success" ? (
                  <>
                    <Check size={14} strokeWidth={1.6} /> Subscribed
                  </>
                ) : (
                  <>
                    Subscribe <Send size={12} strokeWidth={1.6} />
                  </>
                )}
              </button>
            </form>
            <p className="mt-3 text-[11px] text-bone/65 font-sans">
              By subscribing you agree to our privacy policy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
