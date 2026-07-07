import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-pearl px-5 py-16 text-velmora-ink md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl overflow-hidden bg-velmora-ivory shadow-soft lg:grid-cols-2">
        <div
          className="min-h-[420px] bg-velmora-linen"
          data-strk-bg-id="brand-story-atelier-0c6f2e"
          data-strk-bg="[story-kicker] [story-title] [story-copy]"
          data-strk-bg-ratio="4x3"
          data-strk-bg-width="1000"
        />
        <div className="flex items-center px-7 py-12 md:px-12 lg:px-16">
          <div>
            <p id="story-kicker" className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold">Our Story</p>
            <h2 id="story-title" className="mt-4 font-serif text-5xl leading-none md:text-6xl">
              Fine jewelry feeling, without the inherited markup.
            </h2>
            <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-bronze">
              Velmora creates demi-fine essentials in small, intentional edits: luminous gold plating, skin-kind finishes, and silhouettes that feel personal from the first wear. Direct-to-consumer means more of the budget goes into the piece, the packaging, and the moment it becomes yours.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex border-b border-velmora-gold pb-1 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink transition hover:text-velmora-gold"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
