import { Link } from 'react-router-dom'

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 border-t border-warm-gray">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-stone">
            <img
              data-strk-img-id="brand-story-img-n5o6p7"
              data-strk-img="[brand-story-desc-n5o6p7] [brand-story-title-n5o6p7]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <h2
              id="brand-story-title-n5o6p7"
              className="font-serif text-2xl md:text-4xl text-charcoal leading-tight"
            >
              Where Timeless Meets Modern
            </h2>
            <p
              id="brand-story-desc-n5o6p7"
              className="mt-6 text-sm md:text-base text-taupe leading-relaxed"
            >
              Born from a belief that luxury should be accessible, Velmora creates demi-fine jewelry
              that bridges the gap between costume and fine. Each piece is thoughtfully designed in
              our studio, crafted with 18K gold plating over hypoallergenic metals, and finished
              with the kind of detail you'd expect from pieces ten times the price.
            </p>
            <p className="mt-4 text-sm md:text-base text-taupe leading-relaxed">
              We believe jewelry should be worn, not saved. Our pieces are made to layer, to stack,
              to become part of your daily ritual — treasured companions for every chapter.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 border border-charcoal text-charcoal px-8 py-3 text-xs uppercase tracking-ultra-wide font-medium hover:bg-charcoal hover:text-cream transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
