import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const CategoryTiles = () => {
  return (
    <section className="py-section-mobile lg:py-section bg-cream">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Shop by Category</h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link 
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
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
              <div className="absolute inset-0 flex flex-col items-center justify-center text-cream">
                <h3 className="font-serif text-3xl md:text-4xl italic">
                  {category.name}
                </h3>
                <span className="mt-3 text-xs uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore
                </span>
              </div>

              {/* Border */}
              <div className="absolute inset-4 border border-cream/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;