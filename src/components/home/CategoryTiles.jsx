import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-sm uppercase tracking-ultra-wide mb-2">
            Curated Collections
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso">
            Shop by Category
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/collection?category=${category.id}`}
              className="group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-champagne"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-espresso/30 group-hover:bg-espresso/40 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-2 transform transition-transform duration-300 group-hover:-translate-y-1">
                  {category.name}
                </h3>
                <p className="text-ivory/70 text-sm tracking-wide transform transition-transform duration-300 group-hover:-translate-y-1">
                  {category.description}
                </p>
                
                {/* Shop Now Link */}
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-ivory uppercase tracking-wider opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Shop Now
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
