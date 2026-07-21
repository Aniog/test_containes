import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const CategoryTiles = () => {
  return (
    <section className="py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-dark">Shop by Category</h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-velmora-dark/30 group-hover:bg-velmora-dark/50 transition-colors duration-300" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-3xl md:text-4xl text-white tracking-wider">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-white/80 text-sm uppercase tracking-widest-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;