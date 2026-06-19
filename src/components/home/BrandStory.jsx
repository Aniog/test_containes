import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 lg:py-28 bg-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
                alt="Jewelry craftmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold-400 -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="font-sans text-xs tracking-extra-wide uppercase text-gold-600 mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 mb-6 leading-tight">
              Jewelry Should Be
              <span className="block italic font-light">Worn Every Day</span>
            </h2>
            <div className="space-y-4 mb-8">
              <p className="font-sans text-sm text-charcoal-600 leading-relaxed">
                Velmora was born from a simple belief: beautiful jewelry shouldn't be reserved 
                for special occasions. We create pieces that move with you—from morning coffee 
                to evening cocktails.
              </p>
              <p className="font-sans text-sm text-charcoal-600 leading-relaxed">
                Each piece is hand-finished by skilled artisans using 18K gold plating over 
                hypoallergenic sterling silver. The result is jewelry that's both luxurious 
                and livable.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 group"
            >
              <span className="font-sans text-sm font-medium tracking-wider uppercase text-charcoal-800 border-b border-charcoal-800 pb-0.5 transition-colors duration-200 group-hover:text-gold-600 group-hover:border-gold-600">
                Discover Our Story
              </span>
              <svg
                className="w-4 h-4 text-charcoal-800 transform transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gold-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
