import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  return (
    <section id="journal" className="bg-velmora-cream px-5 pb-20 text-velmora-ink md:px-8 lg:pb-28">
      <div className="mx-auto grid max-w-7xl overflow-hidden bg-velmora-blush shadow-editorial lg:grid-cols-[1fr_0.8fr]">
        <div className="p-8 md:p-12 lg:p-16">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink/70">Velmora Notes</p>
          <h2 className="mt-4 max-w-2xl font-serif text-5xl font-medium leading-tight md:text-7xl">Join for 10% off your first order.</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-velmora-ink/75">Receive early access to new drops, styling edits, and gift-ready pieces selected for the season.</p>
          <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <input type="email" required placeholder="Email address" className="min-h-14 flex-1 rounded-full border border-velmora-ink/15 bg-velmora-cream px-6 text-sm text-velmora-ink placeholder:text-velmora-sage focus:border-velmora-ink focus:outline-none" />
            <button type="submit" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-velmora-ink px-7 text-xs font-bold uppercase tracking-[0.2em] text-velmora-cream transition hover:bg-velmora-champagne hover:text-velmora-ink">Join <ArrowRight className="h-4 w-4" /></button>
          </form>
        </div>
        <div className="min-h-[320px] bg-velmora-espresso" data-strk-bg-id="newsletter-editorial-jewelry-flatlay-v82n4k" data-strk-bg="[newsletter-visual-copy] [newsletter-visual-title]" data-strk-bg-ratio="3x4" data-strk-bg-width="900">
          <div className="sr-only">
            <h3 id="newsletter-visual-title">Velmora gold jewelry newsletter</h3>
            <p id="newsletter-visual-copy">Warm editorial flatlay of gold jewelry with soft fabric and gift packaging</p>
          </div>
        </div>
      </div>
    </section>
  )
}
