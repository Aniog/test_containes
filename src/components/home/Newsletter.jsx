import { useState } from "react"
import { CheckIcon } from "../ui/Icons.jsx"
import { cn } from "../../lib/utils.js"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    setError("")
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.")
      return
    }
    setStatus("loading")
    setTimeout(() => {
      setStatus("success")
      setEmail("")
    }, 600)
  }

  return (
    <section className="bg-espresso text-ivory">
      <div className="mx-auto max-w-editorial px-6 md:px-10 lg:px-16 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-7">
            <p className="eyebrow text-champagne-soft/80">The Velmora Letter</p>
            <h2 className="display-serif text-[40px] md:text-[60px] mt-3 leading-[1.05]">
              Join for <span className="italic font-light text-champagne-soft">10% off</span>
              <br />
              your first order.
            </h2>
            <p className="mt-5 text-[15px] text-ivory/70 max-w-md font-light leading-relaxed">
              Quiet, occasional letters: new collections, behind-the-atelier
              stories, and the occasional gift with purchase. No noise.
            </p>
          </div>
          <div className="md:col-span-5">
            <form onSubmit={onSubmit} noValidate className="w-full">
              <div
                className={cn(
                  "flex items-stretch border-b transition-colors",
                  error
                    ? "border-red-300/60"
                    : "border-ivory/30 focus-within:border-champagne-soft",
                )}
              >
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent text-ivory placeholder-ivory/45 py-4 text-[15px] focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="text-[11px] tracking-eyebrow uppercase text-ivory hover:text-champagne-soft transition-colors px-3 disabled:opacity-60"
                >
                  {status === "loading" ? "Sending…" : "Subscribe"}
                </button>
              </div>
              <div className="mt-3 min-h-[20px]">
                {error && (
                  <p role="alert" className="text-[11px] text-red-200/90">{error}</p>
                )}
                {status === "success" && (
                  <p role="status" className="text-[11px] text-champagne-soft inline-flex items-center gap-1.5">
                    <CheckIcon className="h-3.5 w-3.5" />
                    Welcome — check your inbox for your code.
                  </p>
                )}
                {status === "idle" && !error && (
                  <p className="text-[11px] text-ivory/45">
                    By subscribing you agree to our privacy policy.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
