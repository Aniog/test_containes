import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  return (
    <section id="journal" className="bg-velmora-ivory px-4 pb-20 text-velmora-ink sm:pb-28">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-velmora-espresso text-velmora-ivory shadow-editorial">
        <div className="grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:p-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widerLuxury text-velmora-champagne">Private list</p>
            <h2 className="mt-4 font-serif text-5xl font-medium leading-none text-velmora-ivory sm:text-6xl">Join for 10% off your first order.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-ivory/75">Receive early access to limited drops, styling notes, and gifting reminders from Velmora.</p>
          </div>
          <form className="rounded-[2rem] border border-velmora-ivory/15 bg-velmora-ivory/8 p-3" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@example.com"
                className="min-h-14 flex-1 rounded-full border border-velmora-ivory/20 bg-velmora-ivory px-5 text-sm text-velmora-ink placeholder:text-velmora-taupe focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
                required
              />
              <button type="submit" className="premium-button min-h-14 shrink-0">
                Join <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
