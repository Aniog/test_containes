import { Link } from 'react-router-dom';

export default function BrandStorySection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gold-pale">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
            <span id="brand-story-title-n4o5p6" className="sr-only">Velmora Fine Jewelry brand story</span>
            <span id="brand-story-desc-n4o5p6" className="sr-only">Woman wearing gold jewelry in warm natural light editorial portrait</span>
            <img
              data-strk-img-id="brand-story-img-n4o5p6"
              data-strk-img="[brand-story-desc-n4o5p6] [brand-story-title-n4o5p6]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute inset-4 border border-gold/30 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-sans text-xs font-medium uppercase tracking-widest text-gold mb-5">
              Our Story
            </p>
            <h2 className="font-serif font-medium text-4xl md:text-5xl text-espresso leading-tight mb-6">
              Made for the<br />
              <em className="italic font-light">Everyday Extraordinary</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <p className="font-sans text-sm text-taupe leading-relaxed mb-5">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
            </p>
            <p className="font-sans text-sm text-taupe leading-relaxed mb-8">
              Every piece is crafted with 18K gold plating over sterling silver, set with hand-selected stones, and finished with the care of a fine jeweler — at a price that feels like a gift to yourself.
            </p>
            <Link
              to="/shop"
              className="self-start font-sans text-xs font-medium uppercase tracking-widest text-espresso border-b border-espresso pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
