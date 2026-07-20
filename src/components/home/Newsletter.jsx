import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  return (
    <section id="journal" className="bg-velmora-ivory px-5 py-20 text-velmora-ink md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-cocoa text-velmora-ivory shadow-soft">
        <div className="grid gap-8 px-6 py-12 md:grid-cols-[1.1fr_1fr] md:items-center md:px-10 lg:px-16 lg:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widestLuxury text-velmora-champagne">
              The Velmora Letter
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-velmora-ivory md:text-6xl">
              Join for 10% off your first order.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-sand md:text-base">
              Receive early access to small drops, gifting edits, and gentle care notes for keeping your gold luminous.
            </p>
          </div>
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email address"
              className="min-h-14 flex-1 border border-velmora-ivory/25 bg-velmora-ink/20 px-5 text-sm text-velmora-ivory placeholder:text-velmora-sand focus:border-velmora-champagne focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex min-h-14 items-center justify-center gap-3 bg-velmora-champagne px-6 text-sm font-bold uppercase tracking-widest text-velmora-ink transition hover:bg-velmora-gold"
            >
              Join
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
