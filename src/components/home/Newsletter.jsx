import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="bg-[#B9975B] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center text-white sm:px-6 lg:px-8">
        <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-white/80">
          Join the List
        </p>
        <h2 className="font-serif text-3xl font-light uppercase tracking-[0.08em] md:text-4xl">
          10% Off Your First Order
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-sans text-base font-light leading-relaxed text-white/90">
          Be the first to know about new arrivals, exclusive edits, and
          behind-the-scenes stories from the studio.
        </p>

        {submitted ? (
          <div className="mt-10 inline-flex items-center gap-2 border border-white/40 px-8 py-4 text-sm font-medium uppercase tracking-[0.12em]">
            <Check size={16} strokeWidth={1.5} />
            Welcome to Velmora
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full border-b border-white/40 bg-transparent px-0 py-3 font-sans text-sm text-white placeholder-white/60 outline-none transition-colors focus:border-white sm:w-80"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-[#1A1614] px-8 py-3 font-sans text-xs font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#2A211C]"
            >
              Subscribe
              <ArrowRight size={16} strokeWidth={1.5} />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
