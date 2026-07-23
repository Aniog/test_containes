import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="bg-velmora-ivory px-5 pb-16 text-velmora-espresso md:px-8 md:pb-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl overflow-hidden bg-velmora-espresso text-velmora-ivory shadow-editorial md:grid-cols-[1fr_1.1fr]">
        <div className="min-h-72 bg-velmora-parchment md:min-h-full">
          <img
            alt="Velmora gift jewelry styling"
            className="h-full w-full object-cover"
            data-strk-img-id="newsletter-gift-editorial"
            data-strk-img="[newsletter-copy] [newsletter-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div className="p-8 md:p-12 lg:p-16">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-velmora-gold">Velmora Notes</p>
          <h2 id="newsletter-title" className="font-serif text-5xl font-semibold leading-none text-balance text-velmora-ivory md:text-7xl">Join for 10% off your first order.</h2>
          <p id="newsletter-copy" className="mt-5 max-w-xl text-sm leading-7 text-velmora-parchment md:text-base">Receive styling rituals, early access to new drops, and thoughtful gift reminders without the noise.</p>
          <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input id="newsletter-email" type="email" placeholder="Email address" className="min-h-14 flex-1 rounded-full border border-velmora-ivory/20 bg-velmora-ivory px-5 text-sm text-velmora-espresso placeholder:text-velmora-taupe focus:border-velmora-gold focus:outline-none" />
            <button type="submit" className="velmora-focus inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-velmora-gold px-7 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso transition hover:bg-velmora-ivory">
              Join
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
