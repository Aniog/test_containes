import { Link } from "react-router-dom"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function BrandStory() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch lg:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-ink lg:aspect-auto">
          <img
            data-strk-img-id="story-velmora-craft-9d2"
            data-strk-img="[story-subtitle] [story-title] gold jewelry craftsmanship"
            data-strk-img-ratio="3x4"
            data-strk-img-width="900"
            src={PLACEHOLDER}
            alt="Velmora craftsmanship"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-6 py-16 sm:px-12 sm:py-24 lg:px-16">
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-gold">
            Our Story
          </p>
          <h2
            id="story-title"
            className="font-serif text-4xl font-light leading-tight text-ink sm:text-5xl"
          >
            Jewelry made to live
            <br />
            <span className="italic">in, not just for.</span>
          </h2>
          <p
            id="story-subtitle"
            className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base"
          >
            Velmora began with a simple belief: fine jewelry shouldn't be saved for
            special occasions. We craft demi-fine pieces in 18K gold plating over
            sterling silver — weighty enough to feel real, gentle enough to wear
            every day, and priced to be treasured, not hoarded.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
            Every piece is hypoallergenic, ethically made, and finished by hand in
            small batches — so what you wear is as considered as how it was made.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex w-fit items-center gap-2 border-b border-ink pb-1 text-[11px] uppercase tracking-[0.22em] text-ink transition-colors hover:border-gold hover:text-gold-deep"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
