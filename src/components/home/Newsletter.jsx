import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="bg-velmora-cream px-5 pb-16 text-velmora-ink md:px-8 md:pb-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-sm bg-velmora-espresso text-velmora-pearl shadow-soft">
        <div className="grid md:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 md:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.36em] text-velmora-champagne">Velmora private list</p>
            <h2 className="mt-4 font-serif text-5xl leading-none text-velmora-pearl md:text-7xl">Join for 10% off your first order.</h2>
            <p id="newsletter-copy" className="mt-6 max-w-xl text-base leading-7 text-velmora-linen">Receive quiet launches, care notes, and thoughtful gift edits before anyone else.</p>
            <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                className="min-h-14 flex-1 rounded-full border border-velmora-cream/20 bg-velmora-pearl px-5 text-sm text-velmora-ink placeholder:text-velmora-mist focus:border-velmora-champagne focus:outline-none"
              />
              <button className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-velmora-champagne px-7 text-sm font-bold uppercase tracking-[0.22em] text-velmora-ink transition hover:bg-velmora-pearl">
                Sign Up <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
          <div
            className="min-h-80 bg-velmora-linen"
            data-strk-bg-id="velmora-newsletter-stack-2a78ef"
            data-strk-bg="[newsletter-copy] [hero-title]"
            data-strk-bg-ratio="3x2"
            data-strk-bg-width="900"
          />
        </div>
      </div>
    </section>
  )
}
