import { useState } from "react"
import { toast } from "sonner"
import { Check } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email")
      return
    }
    setSubmitted(true)
    toast.success("Welcome to Velmora — check your inbox for 10% off")
    setEmail("")
  }

  return (
    <section className="bg-espresso-800 py-20 sm:py-28 lg:py-32">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center text-ivory">
          <p className="text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-gold-200/90 font-medium mb-5">
            Join the inner circle
          </p>
          <h2 className="font-serif text-ivory text-[2.25rem] sm:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.015em]">
            <span className="display-italic text-gold-200">10% off</span> your
            first order
          </h2>
          <p className="mt-5 text-sm sm:text-base text-ivory-200/80 font-light max-w-md mx-auto leading-relaxed">
            Be the first to know about new collections, restocks, and quiet
            little luxuries. No spam, ever.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 max-w-md mx-auto flex flex-col sm:flex-row items-stretch gap-3"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-transparent border border-ivory-200/30 px-5 py-3.5 text-sm text-ivory placeholder:text-ivory-200/40 focus:border-gold-200 outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={submitted}
              className="inline-flex items-center justify-center gap-2 bg-ivory text-espresso-800 px-7 py-3.5 text-[11px] tracking-[0.22em] uppercase font-medium hover:bg-gold-200 transition-colors disabled:opacity-60"
            >
              {submitted ? (
                <>
                  <Check className="w-3.5 h-3.5" strokeWidth={2} />
                  Subscribed
                </>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
          <p className="mt-5 text-[10px] tracking-[0.18em] uppercase text-ivory-200/45">
            By subscribing, you agree to our Privacy Policy
          </p>
        </div>
      </div>
    </section>
  )
}
