import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] rounded overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
          </div>

          <div className="lg:pl-4">
            <p className="text-xs uppercase tracking-extra-wide text-gold mb-4">
              Our Story
            </p>
            <h2 className="text-charcoal mb-6 leading-tight">
              Jewelry that tells your story
            </h2>
            <div className="space-y-4 text-slate leading-relaxed">
              <p>
                Velmora was born from a simple belief: everyone deserves to wear beautiful jewelry 
                every day, not just on special occasions.
              </p>
              <p>
                Founded in 2019, we set out to create demi-fine pieces that bridge the gap between 
                fashion jewelry and fine jewelry — accessible in price, but exceptional in quality.
              </p>
              <p>
                Each piece is thoughtfully designed and crafted with 18K gold plating over 
                hypoallergenic materials, so you can wear it with comfort and confidence.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-wide text-gold hover:text-gold-dark transition-colors group"
            >
              <span>Discover Our Journey</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
