import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CategoryTiles = () => {
  return (
    <section className="py-20 lg:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="section-subtitle block mb-3">EXPLORE</span>
          <h2 className="section-title">Shop by Category</h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${category.image}')` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal-900/30 group-hover:bg-charcoal-900/40 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-2xl md:text-3xl text-cream-50 mb-2 transform transition-transform duration-300 group-hover:-translate-y-1">
                  {category.name}
                </h3>
                <p className="text-cream-100/80 text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {category.description}
                </p>
                <span className="mt-4 text-cream-50 text-xs tracking-ultra-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  SHOP NOW
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
