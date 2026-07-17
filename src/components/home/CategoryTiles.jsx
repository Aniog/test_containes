import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="section-padding bg-cream-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-extra-wide uppercase text-gold mb-3">
            Curated Collections
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal">
            Shop by Category
          </h2>
        </div>

        {/* Category Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/collection?category=${category.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-charcoal"
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                  {category.name}
                </h3>
                <p className="text-sm text-white/70 mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center text-xs tracking-wide uppercase text-gold opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Explore
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-gold/30 transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
