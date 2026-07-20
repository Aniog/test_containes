import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="bg-velmora-ivory px-5 pb-16 text-velmora-ink md:px-8 md:pb-24">
      <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-blush text-velmora-ink shadow-luxury">
        <div className="grid items-center gap-8 px-6 py-12 md:px-12 lg:grid-cols-[1fr_0.9fr] lg:px-16 lg:py-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-luxury text-velmora-gold">The Velmora List</p>
            <h2 className="font-serif text-4xl leading-tight text-velmora-ink md:text-6xl">Join for 10% off your first order</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-velmora-taupe">
              Receive early access to new drops, styling notes, and gift-ready edits.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="min-h-14 flex-1 border border-velmora-sand bg-velmora-porcelain px-5 text-sm text-velmora-ink placeholder:text-velmora-taupe focus:border-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold/30"
            />
            <button type="submit" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-velmora-espresso px-7 text-xs font-bold uppercase tracking-luxury text-velmora-ivory transition hover:bg-velmora-gold hover:text-velmora-espresso">
              Sign Up <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
