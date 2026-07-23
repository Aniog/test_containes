import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  return (
    <section id="journal" className="bg-velmora-cream px-5 py-16 text-velmora-ink sm:px-8 md:py-24">
      <div className="mx-auto max-w-6xl overflow-hidden bg-velmora-ink text-velmora-cream shadow-soft">
        <div className="grid gap-8 p-8 md:grid-cols-[1.1fr_1fr] md:p-12 lg:p-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-gold">Velmora Journal</p>
            <h2 className="mt-4 font-serif text-5xl leading-none text-velmora-cream md:text-6xl">Join for 10% off your first order.</h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-sm leading-7 text-velmora-cream/72">Receive styling notes, care rituals, and early access to limited gift edits.</p>
            <form className="mt-7 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input id="newsletter-email" type="email" placeholder="Email address" className="min-h-12 flex-1 border border-velmora-cream/20 bg-velmora-cream/8 px-4 text-sm text-velmora-cream placeholder:text-velmora-cream/55 outline-none transition focus:border-velmora-gold" />
              <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 bg-velmora-gold px-6 text-xs font-bold uppercase tracking-[0.2em] text-velmora-ink transition hover:bg-velmora-brass">
                Join <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
