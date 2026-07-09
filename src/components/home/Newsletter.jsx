import React, { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setDone(true)
    setEmail("")
  }

  return (
    <section className="bg-gold text-cream">
      <div className="max-w-editorial mx-auto px-6 md:px-10 py-16 md:py-20 text-center">
        <p className="text-xs uppercase tracking-widest2 text-cream/80 mb-4">
          Join the List
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-cream">
          10% Off Your First Order
        </h2>
        <p className="text-cream/80 text-sm mt-4 max-w-md mx-auto leading-relaxed">
          Be the first to know about new collections, private sales, and styling
          notes. Plus, enjoy 10% off your first order.
        </p>

        {done ? (
          <p className="mt-8 font-serif text-2xl text-cream">
            Welcome to Velmora. Check your inbox.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full sm:flex-1 bg-cream/10 border border-cream/40 text-cream placeholder:text-cream/60 px-5 py-3.5 text-sm outline-none focus:border-cream transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-cream text-ink text-xs uppercase tracking-widest2 px-8 py-3.5 hover:bg-ink hover:text-cream transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
        <p className="text-cream/60 text-[11px] mt-4">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
