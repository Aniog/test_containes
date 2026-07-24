import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
              data-strk-img-id="brand-story-main"
              data-strk-img="[brand-story-subtitle] [brand-story-title] artisan jewelry making gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
            />
          </div>

          {/* Content */}
          <div className="max-w-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight"
            >
              Where Luxury Meets Intention
            </h2>
            <p
              id="brand-story-subtitle"
              className="mt-6 text-stone-600 leading-relaxed"
            >
              Velmora was born from a simple belief: every woman deserves jewelry
              that feels as special as she is. We craft demi-fine pieces using
              18K gold plating over sterling silver, creating designs that
              bridge the gap between costume and fine jewelry.
            </p>
            <p className="mt-4 text-stone-600 leading-relaxed">
              Each piece is designed in our studio, inspired by the quiet beauty
              of everyday moments — the golden hour light, a garden in bloom, the
              gentle curve of an art deco archway.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm uppercase tracking-[0.15em] text-gold hover:text-gold-dark transition-colors border-b border-gold pb-1"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
