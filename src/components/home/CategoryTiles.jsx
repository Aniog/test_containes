import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const CategoryTiles = () => {
  return (
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-ivory text-section-mobile md:text-section mb-4">
            Shop by Category
          </h2>
          <p className="text-warm-gray max-w-md mx-auto">
            Explore our curated collections, each designed with intention and crafted with care.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/50 transition-colors duration-300" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-ivory text-2xl md:text-3xl tracking-widest uppercase border border-ivory/50 px-8 py-3 opacity-80 group-hover:opacity-100 group-hover:border-gold group-hover:text-gold transition-all duration-300">
                  {category.name}
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