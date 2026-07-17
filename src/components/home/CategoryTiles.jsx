import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="section-spacing">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-sm uppercase tracking-extra-wide text-gold mb-3">
            Curated Collections
          </p>
          <h2 className="section-title">Shop by Category</h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/40 transition-colors duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="font-serif text-2xl md:text-3xl uppercase tracking-ultra-wide mb-2 transform transition-transform duration-300 group-hover:-translate-y-1">
                  {category.name}
                </h3>
                <p className="font-sans text-sm text-white/80 opacity-0 group-hover:opacity-100 transform transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
