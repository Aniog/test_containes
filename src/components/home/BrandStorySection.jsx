import { Link } from 'react-router-dom';

const BrandStorySection = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora craftmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-gold-500/30 -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="font-sans text-xs font-medium tracking-ultra-wide uppercase text-gold-600">
              Our Story
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal-900 leading-tight">
              Where Timeless<br />Elegance Meets<br />Modern Craft
            </h2>
            <div className="mt-6 w-12 h-px bg-gold-500" />
            <p className="mt-8 font-sans text-base text-charcoal-800/80 leading-relaxed">
              Every piece in our collection is thoughtfully designed to become a cherished part of your story. We believe jewelry should be more than an accessory—it should be a reflection of who you are and the moments you treasure.
            </p>
            <p className="mt-4 font-sans text-base text-charcoal-800/80 leading-relaxed">
              Crafted from the finest 18K gold plating and hypoallergenic materials, our demi-fine jewelry offers uncompromising quality at a price that celebrates the joy of beautiful things.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-sans text-sm font-medium tracking-wider uppercase text-charcoal-900 hover:text-gold-600 transition-colors group"
            >
              Discover Our Journey
              <span className="w-8 h-px bg-current transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
