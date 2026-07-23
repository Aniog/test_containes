import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="bg-velmora-porcelain px-5 pb-16 text-velmora-pearl md:pb-24">
      <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-espresso shadow-soft">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="eyebrow text-velmora-champagne">Private list</p>
            <h2 className="serif-display mt-4 max-w-2xl text-5xl text-velmora-pearl md:text-7xl">Join for 10% off your first order</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-mist">Receive early access to new drops, care notes, and gifting edits.</p>
            <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input id="newsletter-email" type="email" required placeholder="you@example.com" className="min-h-14 flex-1 rounded-full border border-velmora-gold/30 bg-velmora-pearl px-6 text-sm text-velmora-ink placeholder:text-velmora-taupe focus:border-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold/40" />
              <button type="submit" className="btn-primary min-h-14 gap-2">Join <ArrowRight className="h-4 w-4" /></button>
            </form>
          </div>
          <div
            className="min-h-[320px] bg-velmora-clay"
            data-strk-bg-id="velmora-newsletter-bg-77be4e"
            data-strk-bg="[newsletter-email] [story-title] [hero-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="900"
          />
        </div>
      </div>
    </section>
  )
}
