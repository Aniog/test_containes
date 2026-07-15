import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="bg-velmora-cream px-5 pb-20 text-velmora-ink sm:px-8 sm:pb-28 lg:px-12">
      <div className="mx-auto max-w-7xl bg-velmora-blush px-6 py-12 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-antique">First access</p>
            <h2 className="mt-3 font-serifDisplay text-5xl font-light text-velmora-ink">Join for 10% off your first order</h2>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input id="newsletter-email" type="email" placeholder="Email address" className="min-h-14 flex-1 border border-velmora-antique/30 bg-velmora-porcelain px-5 text-sm text-velmora-ink placeholder:text-velmora-espresso/55 focus:border-velmora-antique focus:outline-none" />
            <button type="submit" className="inline-flex min-h-14 items-center justify-center gap-2 bg-velmora-ink px-7 text-sm font-bold uppercase tracking-[0.22em] text-velmora-cream transition hover:bg-velmora-antique">
              Subscribe <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
