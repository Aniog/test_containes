import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const CategoryTiles = () => {
  return (
    <section className="py-section-mobile md:py-section bg-background">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Shop by Category
          </h2>
          <p className="text-muted text-sm uppercase tracking-widest">
            Find your perfect piece
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-surface-light"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/50 transition-colors duration-300" />
              
              {/* Label on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                  {category.name}
                </h3>
                <p className="text-white/70 text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  Explore
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;