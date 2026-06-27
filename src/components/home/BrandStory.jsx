import { Link } from 'react-router-dom'

const BrandStory = () => {
  return (
    <section className="py-20 md:py-28 border-t border-velmora-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-f1g2h3"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl text-velmora-text tracking-wide"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-velmora-gold mt-5 mb-6" />
            <p
              id="brand-story-text"
              className="text-sm md:text-base text-velmora-muted leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: luxury shouldn't be exclusive. We craft demi-fine
              jewelry in 18K gold plate, designed to move with you — from morning coffee to midnight
              celebrations.
            </p>
            <p className="text-sm md:text-base text-velmora-muted leading-relaxed mb-8">
              Every piece is hypoallergenic, ethically made, and created to be treasured for years.
              Because the best jewelry is the kind you never want to take off.
            </p>
            <Link
              to="/about"
              className="inline-block border border-velmora-gold text-velmora-gold px-8 py-3 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-velmora-gold hover:text-velmora-black transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
