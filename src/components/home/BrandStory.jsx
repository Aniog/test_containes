import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-cream px-5 py-16 text-velmora-espresso md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-espresso shadow-editorial">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            data-strk-bg-id="brand-story-bg-b63f20"
            data-strk-bg="[brand-story-text] [brand-story-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="1000"
          />
          <div className="absolute inset-6 border border-velmora-cream/30" />
        </div>
        <div className="md:pl-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Our point of view</p>
          <h2 id="brand-story-title" className="mt-4 font-serif text-5xl leading-tight text-velmora-espresso md:text-6xl">
            Fine feeling, made accessible.
          </h2>
          <p id="brand-story-text" className="mt-6 text-lg leading-9 text-velmora-mocha">
            Velmora is designed for the woman who wants jewelry to feel intentional, not untouchable. We pair warm 18K gold-plated finishes with modern silhouettes, thoughtful packaging, and pricing that leaves room for gifting yourself again.
          </p>
          <Link to="/shop" className="mt-8 inline-flex border-b border-velmora-champagne pb-1 text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze transition hover:text-velmora-espresso">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
