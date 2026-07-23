import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CategorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-cream)]">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl" style={{ color: 'var(--color-charcoal)' }}>
            Shop by Category
          </h2>
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-[var(--color-ivory)]"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span 
                  className="font-serif text-2xl md:text-3xl text-white tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                  {category.name}
                </span>
              </div>
              
              {/* Always visible label on mobile */}
              <div className="absolute bottom-4 left-4 md:hidden">
                <span className="font-serif text-xl text-white">
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

export default CategorySection;