import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const CategoriesSection = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="font-sans text-xs font-medium tracking-ultra-wide uppercase text-gold-600">
            Curated Collections
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal-900">
            Shop by Category
          </h2>
          <div className="mt-4 w-12 h-px bg-gold-500 mx-auto" />
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal-900/30 group-hover:bg-charcoal-900/40 transition-colors duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-cream-50 tracking-wide">
                  {category.name}
                </h3>
                <p className="mt-2 font-sans text-xs sm:text-sm text-cream-100/80 tracking-wide uppercase">
                  {category.description}
                </p>
                <span className="mt-6 font-sans text-xs sm:text-sm text-cream-50 tracking-wider uppercase border-b border-cream-50/50 pb-0.5 group-hover:border-cream-50 transition-colors">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
