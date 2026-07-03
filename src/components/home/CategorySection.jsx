import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const CategorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-3">
            Shop by Category
          </h2>
          <p className="text-velmora-warm-gray">
            Find your perfect piece
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-velmora-light-gray"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-velmora-charcoal/30 group-hover:bg-velmora-charcoal/40 transition-colors duration-300" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-velmora-cream tracking-wider group-hover:scale-110 transition-transform duration-300">
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