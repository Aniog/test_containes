import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="bg-gold">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-24 md:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-espresso/70">
          Join the Circle
        </p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-espresso md:text-5xl">
          Join for 10% off
          <br />
          your first order
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-espresso/80">
          Be the first to know about new collections, private sales, and styling
          notes. No spam — only beautiful things.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-2xl italic text-espresso">
            Welcome to Velmora. Check your inbox for your code.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 border border-espresso/30 bg-stone/40 px-5 py-4 text-sm text-espresso placeholder:text-espresso/50 focus:border-espresso focus:outline-none"
            />
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 bg-espresso px-7 py-4 text-xs uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-espresso-deep"
            >
              Subscribe
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </button>
          </form>
        )}
        <p className="mt-4 text-[11px] uppercase tracking-[0.15em] text-espresso/60">
          By subscribing you agree to our Privacy Policy
        </p>
      </div>
    </section>
  )
}
