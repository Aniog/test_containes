import { useState } from "react"
import { Send, Check } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email")
      return
    }
    setError("")
    setSubmitted(true)
  }

  return (
    <section className="bg-gold text-ink">
      <div className="container-editorial py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow text-ink/70 mb-4">Join the Inner Circle</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.05]">
              Take 10% off your
              <br />
              <span className="italic font-light">first order</span>.
            </h2>
            <p className="mt-5 text-sm md:text-base text-ink/75 max-w-md leading-relaxed">
              Early access to new drops, atelier stories and the occasional
              gift. Be the first to know.
            </p>
          </div>

          <div className="lg:col-span-5">
            {submitted ? (
              <div className="flex items-center gap-3 text-ink">
                <span className="w-10 h-10 rounded-full bg-ink text-paper inline-flex items-center justify-center">
                  <Check size={18} strokeWidth={1.5} />
                </span>
                <p className="font-serif text-xl">You're in. Check your inbox.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <label className="sr-only" htmlFor="newsletter-email">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (error) setError("")
                    }}
                    placeholder="Your email address"
                    aria-invalid={error ? "true" : "false"}
                    className="input-bare bg-paper text-ink placeholder:text-taupe flex-1"
                  />
                  <button
                    type="submit"
                    className="btn-primary bg-ink text-paper hover:bg-ink/85 border-ink whitespace-nowrap"
                  >
                    Subscribe
                    <Send size={14} strokeWidth={1.5} />
                  </button>
                </div>
                {error ? (
                  <p role="alert" className="text-xs text-ink/80">
                    {error}
                  </p>
                ) : (
                  <p className="text-xs text-ink/65">
                    By subscribing, you agree to our privacy policy. Unsubscribe
                    anytime.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
