import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="bg-velmora-ivory px-5 pb-20 text-velmora-onyx md:px-8 md:pb-28">
      <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-gold text-velmora-onyx shadow-velmora-soft">
        <div className="grid gap-8 px-6 py-12 md:grid-cols-[1.2fr_1fr] md:items-center md:px-12 lg:px-16">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-velmora-onyx">The Velmora List</p>
            <h2 className="mt-3 font-serif text-5xl leading-none text-velmora-onyx md:text-6xl">Join for 10% off your first order.</h2>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              className="min-h-14 flex-1 border border-velmora-onyx/20 bg-velmora-ivory px-4 text-sm text-velmora-onyx placeholder:text-velmora-stone focus:outline-none focus:ring-2 focus:ring-velmora-onyx"
            />
            <button type="submit" className="inline-flex min-h-14 items-center justify-center gap-2 bg-velmora-onyx px-6 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-ivory transition hover:bg-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-ivory">
              Join
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
