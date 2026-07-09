import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="bg-velmora-espresso py-16 text-velmora-ivory sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative min-h-[480px] overflow-hidden bg-velmora-charcoal">
          <div
            className="absolute inset-0 bg-cover bg-center"
            data-strk-bg-id="brand-story-bg-b132d0"
            data-strk-bg="[brand-story-copy] [brand-story-heading]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="1200"
          />
          <div className="absolute inset-0 bg-velmora-espresso/10" />
        </div>
        <div className="lg:pl-12">
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-velmora-gold">Velmora atelier</p>
          <h2 id="brand-story-heading" className="mt-4 font-serif text-5xl font-medium leading-tight sm:text-6xl">
            Luxury in the details, ease in the everyday.
          </h2>
          <p id="brand-story-copy" className="mt-6 max-w-xl text-base leading-8 text-velmora-champagne">
            We design demi-fine jewelry for women who collect meaningful pieces rather than trends. Every curve, clasp, and crystal is selected to glow warmly against the skin and layer beautifully with what you already love.
          </p>
          <Link to="/about" className="mt-8 inline-block border-b border-velmora-gold pb-2 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ivory transition hover:text-velmora-gold">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
