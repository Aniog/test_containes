import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CategoryTiles = () => {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-charcoal">
            Shop by Category
          </h2>
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] rounded overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent transition-opacity duration-300 group-hover:from-charcoal/90" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {category.name}
                </h3>
                <p className="font-sans text-xs uppercase tracking-wider text-white/70 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {category.description}
                </p>
                <div className="mt-4 w-8 h-px bg-gold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
