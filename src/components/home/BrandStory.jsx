import { Link } from "react-router-dom"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image left */}
          <div className="relative aspect-[4/5] overflow-hidden bg-sand order-1">
            <img
              alt="Velmora jewelry craftsmanship"
              data-strk-img-id="story-main-d4e5f6"
              data-strk-img="[story-heading] [story-body] gold jewelry craftsmanship studio"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src={PLACEHOLDER}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* Text right */}
          <div className="order-2 md:pl-6">
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">
              Our Story
            </p>
            <h2
              id="story-heading"
              className="font-serif text-4xl md:text-5xl text-ink leading-tight"
            >
              Jewelry made to live with you
            </h2>
            <p
              id="story-body"
              className="mt-6 text-stone leading-relaxed text-base"
            >
              Velmora began with a simple belief: that fine jewelry shouldn't
              wait for special occasions. Each piece is hand-finished in 18K
              gold plating, hypoallergenic and made to be worn through every
              ordinary, extraordinary day. We design in small batches, so every
              detail is considered — and every piece feels like yours.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-xs uppercase tracking-[0.2em] text-ink border-b border-gold pb-1 hover:text-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
