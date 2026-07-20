import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="bg-velmora-ivory px-5 py-16 text-velmora-ink md:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl bg-velmora-bronze px-6 py-12 text-velmora-cream md:px-14 md:py-16">
        <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-end">
          <div>
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-velmora-cream/85">Private list</p>
            <h2 className="font-serif text-5xl leading-tight text-velmora-cream md:text-7xl">Join for 10% off your first order</h2>
            <p className="mt-4 max-w-xl font-sans text-sm leading-7 text-velmora-cream/90">Receive quiet launches, care notes, and considered gifting edits from Velmora.</p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="min-h-14 flex-1 border border-velmora-cream/50 bg-velmora-cream px-4 font-sans text-sm text-velmora-ink placeholder:text-velmora-cocoa focus:border-velmora-forest focus:outline-none"
            />
            <button type="submit" className="inline-flex min-h-14 items-center justify-center gap-2 bg-velmora-forest px-6 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-velmora-cream transition hover:bg-velmora-ink">
              Join <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
