import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-ivory px-5 py-16 text-velmora-ink md:px-8 md:py-24 lg:px-12">
      <div className="mx-auto grid max-w-7xl overflow-hidden border border-velmora-champagne/80 bg-velmora-cream lg:grid-cols-2">
        <div className="relative min-h-[26rem] bg-velmora-forest lg:min-h-[42rem]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            data-strk-bg-id="brand-story-bg-e94b21"
            data-strk-bg="[story-copy] [story-title]"
            data-strk-bg-ratio="3x2"
            data-strk-bg-width="1200"
          />
        </div>
        <div className="flex items-center p-8 md:p-14 lg:p-20">
          <div className="max-w-xl text-velmora-ink">
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-velmora-bronze">Our atelier</p>
            <h2 id="story-title" className="font-serif text-5xl leading-tight text-velmora-ink md:text-7xl">Jewelry for the rituals of real life</h2>
            <p id="story-copy" className="mt-6 font-sans text-base leading-8 text-velmora-cocoa">
              Velmora designs demi-fine pieces that feel intimate, luminous, and attainable. Each piece is chosen for lasting wearability: gold warmth, skin-friendly details, giftable finishing, and silhouettes that move from morning coffee to candlelit dinners.
            </p>
            <Link to="/shop" className="mt-8 inline-flex border-b border-velmora-bronze pb-1 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-velmora-bronze transition hover:text-velmora-forest">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
