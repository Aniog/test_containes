import { useState } from "react"
import { Mail, ArrowRight, Check } from "lucide-react"

export default function Newsletter({ variant = "dark" }) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes("@")) return
    setSubmitted(true)
  }

  const isDark = variant === "dark"

  return (
    <section
      className={`${isDark ? "bg-espresso-800 text-cream-50" : "bg-gold-300 text-espresso-800"} py-20 md:py-24`}
      aria-label="Join our newsletter"
    >
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className={`eyebrow ${isDark ? "text-gold-300" : "text-espresso-800/70"}`}>
            Be the First to Know
          </p>
          <h2
            id="newsletter-title"
            className="mt-3 font-serif text-4xl md:text-5xl text-balance"
          >
            Join for <span className="italic">10% off</span> your first order
          </h2>
          <p
            id="newsletter-subtitle"
            className={`mt-5 text-sm md:text-base leading-relaxed max-w-md mx-auto ${
              isDark ? "text-cream-100/75" : "text-espresso-800/80"
            }`}
          >
            New collections, editorial stories, and a quiet inbox — never spammy.
          </p>

          {submitted ? (
            <div className="mt-9 inline-flex items-center gap-3 py-4 px-6 border border-current">
              <Check className="h-4 w-4" strokeWidth={1.6} />
              <span className="text-sm tracking-wider">Welcome — check your inbox for your code.</span>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md mx-auto"
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <div className="flex-1 relative">
                <Mail
                  className={`absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 ${
                    isDark ? "text-cream-100/50" : "text-espresso-800/50"
                  }`}
                  strokeWidth={1.4}
                />
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className={`w-full pl-11 pr-4 py-3.5 text-sm tracking-wide placeholder:text-current/40 focus:outline-none border ${
                    isDark
                      ? "bg-transparent text-cream-50 border-cream-100/30 focus:border-gold-300"
                      : "bg-transparent text-espresso-800 border-espresso-800/30 focus:border-espresso-800"
                  }`}
                />
              </div>
              <button
                type="submit"
                className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[11px] uppercase tracking-widest2 font-medium transition-colors ${
                  isDark
                    ? "bg-cream-50 text-espresso-800 hover:bg-gold-300"
                    : "bg-espresso-800 text-cream-50 hover:bg-espresso-700"
                }`}
              >
                Subscribe
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.6} />
              </button>
            </form>
          )}

          <p className={`mt-5 text-[11px] uppercase tracking-widest2 ${isDark ? "text-cream-100/50" : "text-espresso-800/60"}`}>
            By subscribing you agree to our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  )
}
