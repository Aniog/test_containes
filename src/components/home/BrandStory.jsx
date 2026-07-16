import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-porcelain py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="relative min-h-[500px] overflow-hidden rounded-t-full bg-velmora-sand shadow-editorial">
          <div
            className="absolute inset-0 bg-cover bg-center"
            data-strk-bg-id="brand-story-bg-b42d18"
            data-strk-bg="[story-body] [story-title]"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/30 to-transparent" />
        </div>
        <div className="lg:pl-12">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-velmora-champagne">Our philosophy</p>
          <h2 id="story-title" className="mt-4 font-serif text-5xl font-medium leading-tight text-velmora-espresso md:text-7xl">
            Fine-feeling jewelry without the boutique markup.
          </h2>
          <p id="story-body" className="mt-6 text-base leading-8 text-velmora-cocoa/78 md:text-lg">
            Velmora creates demi-fine gold jewelry in small, considered edits: sculptural huggies, luminous crystal accents, and giftable sets made to feel personal. Every piece is selected for everyday comfort, lasting shine, and the warm confidence of quiet luxury.
          </p>
          <Link to="/shop" className="mt-8 inline-flex items-center border-b border-velmora-champagne pb-1 text-xs font-bold uppercase tracking-[0.28em] text-velmora-espresso transition-colors hover:text-velmora-champagne">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
