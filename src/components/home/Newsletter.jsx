import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="bg-velmora-ivory px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 bg-velmora-rose px-6 py-12 text-velmora-pearl shadow-velmora sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-14 lg:py-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-nav text-velmora-pearl/90">Velmora notes</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-velmora-pearl sm:text-5xl">Join for 10% off your first order</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-pearl/90">Receive early access to new drops, styling notes, and thoughtful gifting reminders.</p>
        </div>
        <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input id="newsletter-email" type="email" required placeholder="Email address" className="min-h-14 flex-1 rounded-full border border-velmora-pearl/40 bg-velmora-pearl px-5 text-sm text-velmora-ink placeholder:text-velmora-cocoa focus:outline-none focus:ring-2 focus:ring-velmora-espresso" />
          <button type="submit" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-velmora-espresso px-7 text-xs font-bold uppercase tracking-nav text-velmora-pearl transition hover:bg-velmora-ink">
            Join <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  )
}
