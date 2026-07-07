import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 lg:py-28 bg-cream-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-xs text-gold uppercase tracking-ultra-wide mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso-900 mb-6 leading-tight">
              Jewelry that tells your story
            </h2>
            <div className="space-y-4 text-taupe leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that's as meaningful as it is beautiful. We craft demi-fine pieces that bridge the gap between fashion and fine jewelry.
              </p>
              <p>
                Each design begins with a story — a moment of inspiration drawn from nature, architecture, or the women who wear our pieces. Our artisans then bring these visions to life using ethically sourced materials and traditional techniques.
              </p>
              <p>
                The result? Jewelry that feels luxurious without the luxury price tag. Pieces you'll reach for every day, not just for special occasions.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-wider text-espresso-900 hover:text-gold transition-colors group"
            >
              <span>Discover Our Journey</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
