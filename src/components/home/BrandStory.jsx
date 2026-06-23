import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section id="about" className="bg-velmora-champagne py-16 text-velmora-ink md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
        <div className="relative min-h-[520px] overflow-hidden bg-velmora-espresso shadow-soft">
          <div
            className="absolute inset-0"
            data-strk-bg-id="brand-story-bg-7bd3f1"
            data-strk-bg="[story-kicker] [story-heading] [story-copy]"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="900"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-velmora-pearl/20" />
        </div>
        <div className="px-0 md:px-8 lg:px-14">
          <p id="story-kicker" className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-goldDeep">The Velmora way</p>
          <h2 id="story-heading" className="mt-4 font-serifDisplay text-5xl font-medium leading-tight text-velmora-ink md:text-6xl">
            Jewelry for becoming, remembering, and beginning again.
          </h2>
          <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-bark">
            We design demi-fine pieces that balance lasting finish with attainable pricing — warm gold plating, skin-kind materials, and silhouettes that feel found in an old jewelry box but made for today.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex border border-velmora-gold px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-goldDeep transition hover:bg-velmora-gold hover:text-velmora-ink"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
