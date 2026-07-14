import { Link } from 'react-router-dom';
import { brandStory } from '@/data/products';

function BrandStorySection() {
  return (
    <section className="py-20 md:py-30 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={brandStory.image}
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            
            {/* Decorative Frame */}
            <div className="absolute inset-4 border border-accent/30 pointer-events-none" />
          </div>
          
          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-sm font-medium text-accent tracking-widest uppercase">
              {brandStory.subtitle}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
              {brandStory.title}
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              {brandStory.text}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors group"
            >
              <span>{brandStory.link}</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandStorySection;
