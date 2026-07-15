import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-16 sm:py-24 bg-[#C9A96E]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-3 font-medium">
            Newsletter
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Join for 10% Off
          </h2>
          <p className="text-white/80 text-sm sm:text-base mb-8 max-w-md mx-auto">
            Subscribe to receive exclusive offers, early access to new collections, and styling inspiration.
          </p>

          {submitted ? (
            <p className="text-white font-medium text-sm">
              Thank you! Check your inbox for your discount code.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/30 text-white placeholder:text-white/50 px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
              />
              <Button
                type="submit"
                className="bg-[#1C1C1C] hover:bg-[#2a2a2a] text-white px-8 py-3 text-xs uppercase tracking-[0.15em] font-medium rounded-none h-auto"
              >
                Subscribe
              </Button>
            </form>
          )}

          <p className="text-white/50 text-[11px] mt-4">
            By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
