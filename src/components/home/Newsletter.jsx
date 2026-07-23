import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="bg-velmora-cream px-5 pb-20 text-velmora-ink lg:px-12 lg:pb-28">
      <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-gold text-velmora-pearl shadow-glow">
        <div className="grid gap-8 px-6 py-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-12 lg:px-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-cream/90">Velmora letter</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight md:text-6xl">Join for 10% off your first order</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-cream/90">Receive early access to new drops, styling notes, and quiet gifting reminders.</p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input id="newsletter-email" type="email" placeholder="Email address" className="min-h-14 flex-1 rounded-full border border-velmora-pearl/35 bg-velmora-pearl px-5 text-sm text-velmora-ink placeholder:text-velmora-charcoal/55 focus:border-velmora-ink" />
            <button type="submit" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-velmora-ink px-6 text-xs font-bold uppercase tracking-[0.22em] text-velmora-pearl transition hover:bg-velmora-charcoal">Join <ArrowRight className="h-4 w-4" /></button>
          </form>
        </div>
      </div>
    </section>
  )
}
