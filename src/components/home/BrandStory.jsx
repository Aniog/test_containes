import { Link } from 'react-router-dom'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function BrandStory() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-0 md:grid-cols-2">
        {/* Image left */}
        <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
          <img
            data-strk-img-id="brand-story-img-3c8e"
            data-strk-img="[story-text] [story-heading] gold jewelry craftsmanship atelier warm"
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora atelier craftsmanship"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Text right */}
        <div className="px-6 py-16 md:px-14 md:py-24 lg:px-20">
          <p className="text-xs uppercase tracking-widest2 text-gold">Our Story</p>
          <h2
            id="story-heading"
            className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl"
          >
            Made to be worn,
            <br />
            made to be kept.
          </h2>
          <p
            id="story-text"
            className="mt-6 text-sm leading-relaxed text-stone"
          >
            Velmora began with a simple belief: that fine jewelry should not be
            reserved for special occasions. Each piece is hand-finished in 18K
            gold plating over sterling silver, designed in our studio to be
            warm, weighty, and quietly luxurious — the kind of gold you reach
            for every morning and never want to take off.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-stone">
            Hypoallergenic, ethically made, and crafted to last far beyond the
            trend cycle.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-block border-b border-gold pb-1 text-xs uppercase tracking-widest2 text-gold transition-colors hover:text-gold-soft"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
