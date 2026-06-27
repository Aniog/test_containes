import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="bg-velmora-sand py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        {/* Image left */}
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-line">
          <div
            className="absolute inset-0"
            data-strk-bg-id="story-bg-4d8e1b"
            data-strk-bg="[story-text] [story-title] gold jewelry craftsmanship studio"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="800"
          />
        </div>

        {/* Text right */}
        <div className="md:pl-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-velmora-gold">
            Our Story
          </p>
          <h2
            id="story-title"
            className="mt-4 font-serif text-4xl leading-tight text-velmora-ink md:text-5xl"
          >
            Gold, Made to Be Lived In
          </h2>
          <p
            id="story-text"
            className="mt-6 text-sm leading-relaxed text-velmora-stone md:text-base"
          >
            Velmora began with a simple belief: that fine gold jewelry should
            not be locked away for special occasions. We design demi-fine
            pieces in 18K gold plating — warm enough to feel heirloom, durable
            enough for the everyday. Every piece is hypoallergenic, ethically
            made, and crafted to be treasured for years, not seasons.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-block border-b border-velmora-gold pb-1 text-[11px] uppercase tracking-[0.2em] text-velmora-ink transition-colors hover:text-velmora-gold"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
