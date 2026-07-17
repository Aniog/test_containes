import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            Find Your Perfect Piece
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              to={`/collection?category=${category.slug}`}
              className="group relative aspect-[3/4] rounded-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <h3 className="font-serif text-2xl sm:text-3xl text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gold">
                  Explore
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
