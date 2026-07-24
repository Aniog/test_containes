import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.includes('@')) return
    setSubscribed(true)
  }

  return (
    <section className="bg-espresso py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-10">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold-soft">The Velmora Letter</p>
          <h2 className="mt-4 font-display text-3xl font-light text-ivory md:text-5xl">
            Join for <span className="italic text-gold-soft">10% off</span> your first order
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ivory/60">
            New pieces, private offers and stories from the atelier — once a week, never more.
          </p>

          {subscribed ? (
            <div className="anim-slide-up mx-auto mt-9 flex max-w-md items-center justify-center gap-3 border border-gold-soft/40 bg-ivory/5 px-6 py-5">
              <Check className="h-4 w-4 text-gold-soft" />
              <p className="text-sm text-ivory">Welcome to Velmora. Your code is on its way.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email address"
                className="h-14 flex-1 border border-ivory/25 bg-transparent px-5 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold-soft focus:outline-none"
              />
              <button
                type="submit"
                className="group inline-flex h-14 items-center justify-center gap-2 bg-gold px-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory transition-colors duration-300 hover:bg-gold-deep"
              >
                Subscribe
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
